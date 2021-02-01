import React from "react";
import Button from 'react-bootstrap/Button';
import COUNTRY_CODES from '../utils/country_code';
import URLS from "../utils/url";

const FetchTimeSeries = ({ country, size, history }) => {
    const iconSize = size ? size : 48;
    
    let selectedCountry = [];
    let image = '';
    
    selectedCountry = COUNTRY_CODES.filter( elem => {
        return elem.name === country;
    });
    if (selectedCountry.length > 0) {
        let countryCode = selectedCountry[0]['alpha2code'];
        image =  <img src={`${URLS.BASE_COUNTRY_FLAGS}/${countryCode}/flat/${iconSize}.png`} alt={country} />
    }

    const getCountryDetails = (event, country) => {
        event.preventDefault();
        if (history) {
            history.push(`/country-details?name=${country}`);
        }
    }
    
    return(
        
            <Button 
                variant="light" 
                size="sm"
                className="countryCapsules"
                onClick={event => getCountryDetails(event, country)}
                active>
                    <div className="imageCountry">
                        { image }
                        <span>{ country }</span>
                    </div>
            </Button>
        
    );
};

export default FetchTimeSeries;