import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Country from './Country';

import {reactLocalStorage} from 'reactjs-localstorage';

const Home = () => {

    const countryNameFromStorage = reactLocalStorage.getObject('country_selection');
    
    let countryName = Object.keys(countryNameFromStorage).length > 0 ? 
                        countryNameFromStorage : 
                        'Italy';
     return(
        <>
        <Container className="Home" fluid>
            <Row className="countryHeadline">
                <Col sm={12}>
                    <Country countryName={ countryName } />
                </Col>
            </Row>
        </Container>
    </>
    )
};

export default Home;