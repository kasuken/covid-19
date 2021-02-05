import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Loader from 'react-loader-spinner';

import { useFetch } from './hooks/useFetch';

import Home from './Home';
import World from './World';
import Countries from './Countries';
import Country from './Country';
import NotFoundPage from './NotFoundPage';
import About from './About';
import GitHub from './GitHub';

import { registerCovid19Data } from './actions/covidAction';

import * as covid from '../../assets/images/covid.png';
import URLS from "./utils/url";

const App = () => {
  const dispatch = useDispatch();
  const [countryCoronaData, countryCoronaDataLoading] = useFetch(`${URLS.BASE_CORONA}/countries`);
  
  if (!countryCoronaDataLoading) {
    dispatch(registerCovid19Data(countryCoronaData));
  }

  return (
        <Router>
          <div className="App">
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="/">
                <img
                  alt={covid}
                  src={covid}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                COVID-19
              </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/world">World</Nav.Link>
                <Nav.Link href="/countries">Countries</Nav.Link>
              </Nav>
              <GitHub />
              <About />
            </Navbar>

            <Switch>
              <Route exact path="/"
                render={props => 
                  countryCoronaDataLoading ?
                  <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={150}
                    width={150}
                    style={{marginLeft: '40%', marginTop: '13%'}}
                  /> :              
                  <Home {...props} />}
                 />
              <Route exact path="/home"
                render={props => 
                  countryCoronaDataLoading ?
                  <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={150}
                    width={150}
                    style={{marginLeft: '40%', marginTop: '13%'}}
                  /> :              
                  <Home {...props} />}
                 />
              <Route exact path="/world"
              render={props => 
                countryCoronaDataLoading ?
                  <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={150}
                    width={150}
                    style={{marginLeft: '40%', marginTop: '13%'}}
                  /> :              
                  <World {...props}/>}
              />
              <Route exact path="/countries"
                render={props => 
                  countryCoronaDataLoading ?
                  <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={150}
                    width={150}
                    style={{marginLeft: '40%', marginTop: '13%'}}
                  /> :              
                  <Countries {...props} />}
                 />
              <Route exact path="/country-details" 
                render={props =>
                  countryCoronaDataLoading ?
                  <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={150}
                    width={150}
                    style={{marginLeft: '40%', marginTop: '13%'}}
                  /> :              
                  <Country {...props} />} />
              <Route path='*' render={(props) => <NotFoundPage {...props} />} />
            </Switch>
          </div>
        </Router>
  );
};

export default App;