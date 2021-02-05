import React, { useState, useEffect } from "react";

import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useFetch } from './hooks/useFetch';

import OverAllWidget from './covid-all/OverAllWidget';
import TopNDeathWidget from './covid-all/TopNDeathWidget';
import TopNRecoveredWidget from './covid-all/TopNRecoveredWidget';
import TopNTodayDeath from './covid-all/TopNTodayDeath';
import CountryCasesWidget from './covid-all/CountryCasesWidget';
import CompareWidget from './covid-all/CompareWidget';
import CountryTestCase from './covid-all/CountryTestCase';

import world from '../../assets/images/world.png';
import URLS from "./utils/url";

const World = ({ history }) => {
    const covid19Data = useSelector(state => state.covid19);
    let data = covid19Data.filter(elem => {
        return elem['country'] !== 'World';
    })
    const [allData, allDataLoading] = useFetch(`${URLS.BASE_CORONA}/all`);
    const [filtered, setFiltered] = useState([]);
    const columnDefs = [
        { headerName: "Country", field: "country", sortable: true, filter: true },
        { headerName: "Total Cases", field: "cases", sortable: true, filter: true },
        { headerName: "Cases Today", field: "todayCases", sortable: true, filter: true },
        { headerName: "Deaths", field: "deaths", sortable: true, filter: true },
        { headerName: "Deaths Today", field: "todayDeaths", sortable: true, filter: true },
        { headerName: "Recovered", field: "recovered", sortable: true, filter: true },
        { headerName: "Active Cases", field: "active", sortable: true, filter: true },
        { headerName: "Critical", field: "critical", sortable: true, filter: true },
        { headerName: "Cases Per One Million", field: "casesPerOneMillion", sortable: true },
    ];

    useEffect(() => {
        setFiltered(data);
    }, []);

    const handleFind = event => {
        event.preventDefault();
        let filtered = data.filter(elem => {
            return elem.country.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setFiltered(filtered);
    }

    return (
        <div className="world">
            <Container className="charts" fluid>
                <Row className="worldHeading">
                    <Col>
                        <h1>
                            <img
                                src={world}
                                height="64px"
                                width="64px"
                                alt="World"
                                className="world" />
                        World
                    </h1>
                    </Col>
                </Row>
                <Row className="worldCharts">
                    <Col sm={12}>
                        <CompareWidget history={history}/>
                    </Col>
                </Row>
                <Row className="worldCharts">
                    <Col sm={12}>
                        <CountryTestCase />
                    </Col>
                </Row>
                <Row className="worldCharts">
                    <Col sm={6}>
                        <TopNDeathWidget data={data} />
                    </Col>
                    <Col sm={6}>
                        <TopNRecoveredWidget data={data} />
                    </Col>
                </Row>
                <Row className="worldCharts">
                    <Col sm={6}>
                        <OverAllWidget loading={allDataLoading} data={allData} />
                    </Col>
                    <Col sm={6}>
                        <TopNTodayDeath data={data} />
                    </Col>
                </Row>
                <Row className="worldCharts">
                    <Col sm={12}>
                        <CountryCasesWidget data={data} />
                    </Col>
                </Row>
            </Container>

        </div>
    )
};

export default World;