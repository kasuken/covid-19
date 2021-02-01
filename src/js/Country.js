import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge'
import CurrencyFormat from 'react-currency-format';

import COUNTRY_CODES from './utils/country_code';
import TimeSeries from './time-series/TimeSeries';
import HomePageSelector from './HomePageSelector';
import {reactLocalStorage} from 'reactjs-localstorage';
import URLS from './utils/url';

const Country = (props) => {
    const queriedCountry = props.location ? 
                            new URLSearchParams(props.location.search).get('name') : 
                            props.countryName;
    const [countryName, setCountryName] = useState(
        queriedCountry
    );
    
    const countryCoronaData = useSelector(state => state.covid19);
    const getCountryCode = country => {
        let selectedCountry = COUNTRY_CODES.filter(elem => {
            return elem.name === country;
        });
        let countryCode = '';
        if (selectedCountry.length > 0) {
            countryCode = selectedCountry[0]['alpha2code'];
        }
        return countryCode;
    }

    let covid = countryCoronaData.filter(elem => {
        return elem.country.toLowerCase() === countryName.toLowerCase();
    });

    const getTotalValue = type => {
        if (type === 'confirmed') {
            return covid[0].cases;
        } else if (type === 'active') {
            return covid[0].active;
        } else if (type === 'recovered') {
            return covid[0].recovered;
        } else if (type === 'deaths') {
            return covid[0].deaths;
        }
    }

    const getIncreasdValue = type => {

            if (type === 'confirmed') {
                return getFormattedIncreased(covid[0].todayCases);
            } else if (type === 'active') {
                return getFormattedIncreased(covid[0].todayCases);
            } else if (type === 'deaths') {
                return getFormattedIncreased(covid[0].todayDeaths);
            }
    }

    const getFormattedIncreased = value => {
        if (value > 0) {
            return `[ Today: +${value} ]`;
        } else {
            return `[ Today: 0 ]`;
        }
    }

    const getPercentage = type => {
       if (type === 'active') {
            let calc = (covid[0].active/covid[0].cases) * 100;
            return `${ calc.toFixed(2) }%`;
        } else if (type === 'recovered') {
            let calc = (covid[0].recovered/covid[0].cases) * 100;
            return `${ calc.toFixed(2) }%`;
        } else if (type === 'deaths') {
            let calc = (covid[0].deaths/covid[0].cases) * 100;
            return `${ calc.toFixed(2) }%`;
        }
    }

    const updateCountry = country => {
        setCountryName(country);
        reactLocalStorage.setObject('country_selection', country);
    }
   
    return(
       <Container className="country" fluid >
            <Row>
                <Col>
                    <h1>
                        {
                            getCountryCode(countryName) !== '' ?
                                <img
                                    src={`${URLS.BASE_COUNTRY_FLAGS}/${getCountryCode(countryName)}/flat/64.png`}
                                    alt={countryName}
                                    className="flag" /> : null
                        }
                        {countryName}
                         <HomePageSelector 
                            preSelected={countryName}
                            update={updateCountry}/>
                    </h1>

                </Col>
            </Row>
            {
                covid.length > 0 ?
                    <Row className="stat">
                        <Col sm={3}>
                            <Badge variant="info" className="total">
                                <h3 className="label">Total</h3>
                                <CurrencyFormat
                                    value={getTotalValue('confirmed')}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    renderText={value => <div className="value">{value}</div>} />
                                <div className="extra">{getIncreasdValue('confirmed')}</div>

                            </Badge>
                        </Col>
                        <Col sm={3}>
                            <Badge variant="warning" className="active">
                                <h3 className="label">Active</h3>
                                <div className="perct">{getPercentage('active')}</div>
                                <CurrencyFormat 
                                    value={getTotalValue('active')} 
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    renderText={value => <div className="value">{value}</div>} />
                                <div className="extra">{getIncreasdValue('active')}</div>    
                                
                                
                            </Badge>
                    </Col>
                    <Col sm={3}>
                        <Badge variant="success" className="recovered">
                            <h3 className="label">Recovered</h3>
                            <div className="perct">{getPercentage('recovered')}</div>
                            <CurrencyFormat 
                                    value={getTotalValue('recovered')} 
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    renderText={value => <div className="value">{value}</div>} />
                            {
    
                                    <div className="extra">{getIncreasdValue('recovered')}</div> 
                            }
                        </Badge>
                    </Col> 
                    <Col sm={3}>
                        <Badge variant="danger" className="deaths">
                            <h3 className="label">Deaths</h3>
                            <div className="perct">{getPercentage('deaths')}</div>
                            <CurrencyFormat 
                                    value={getTotalValue('deaths')} 
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    renderText={value => <div className="value">{value}</div>} />
                            
                            <div className="extra">{getIncreasdValue('deaths')}</div>
                        </Badge>
                    </Col>
                </Row> : null
            }
            <Row className="trends">
                <Col>
                    <TimeSeries country={countryName} />
                </Col>
            </Row>
        </Container>
    )
};

export default Country;