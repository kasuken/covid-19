import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

const About = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="about">
          <Button className="link" variant="link" onClick={handleShow}>
            About
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>About</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h2>About this project</h2>
                <br />
                <p>
                    Initially, the only motivation behind building this app was to improve my ReactJs skills.
                    Now it became a tool to monitoring the Covid-19 situation in the World.
                </p>
                    
                <b>Data is coming from these sources 👍:</b>
                <ul>
                    <li>
                        <a href="https://corona.lmao.ninja/docs/" target="_blank">
                            Coronavirus Ninja API
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/pomber/covid19/" target="_blank">
                            Corona timeseries API
                        </a>
                    </li>
                    <li>
                        <a href="https://saurav.tech/NewsAPI/top-headlines/category/health/in.json" target="_blank">
                            API for News
                        </a>
                    </li>
                </ul>
                <br />
                <h3>💻 Technologies 💻</h3>
                <p>
                    This app is built from the scratch using following technologies:
                    <ul>
                        <li>
                            <a href="https://reactjs.org/" target="_blank">ReactJs</a>
                        </li>
                        <li>
                            <a href="https://react-bootstrap.netlify.com/" target="_blank">Bootstrap</a>
                        </li>
                        <li>
                            <a href="http://recharts.org/en-US/" target="_blank">Recharts</a>
                        </li>
                    </ul>
                </p>
                <br />
                <a href="https://www.emanuelebartolesi.com" target="_blank">
                Contact me
                </a> for any further questions.
                
            </Modal.Body>
          </Modal>
        </div>
    );
};

export default About;