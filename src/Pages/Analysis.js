import React, { useState, useEffect } from 'react'
import Header from './Header'
import NavHorizontal from './NavHorizontal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faChartArea, faChartPie } from '@fortawesome/free-solid-svg-icons'
import * as d3 from "d3";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Analysis() {
    /* get the context instance */
    const [data, setData] = useState(0);
    const [timerVar, setTimerVar] = useState(0);

    useEffect(() => (
        setData(0)
    ), []);

    /* all of the main content goes here  */
    return (
        <section className="home-page mobile-only">
            <Header />
            <NavHorizontal />
            <div className="row ov-y-hide">

                <div className="container communiy-content">
                    <div className="chart chart-1">
                        <Jumbotron>
                            <div className="container">
                                <Row className="row">
                                    <Col className="col-lg-6">
                                        <FontAwesomeIcon className="chart-col2" icon={faChartPie} />
                                    </Col>
                                    <Col className="col-lg-6">
                                        <p className=""><b>Food (23Kg Co2)</b></p>
                                        <p className="analytics-sub">You have ate 300 Gms of beef in lunch and 200 gms chicken for dinner, which contributed to  23Kg of Co2</p>
                                    </Col>
                                </Row>
                            </div>
                        </Jumbotron>
                    </div>
                    <div className="chart chart-1">
                        <Jumbotron>
                            <div className="container">
                                <Row className="row">

                                    <Col className="col-lg-6">
                                        <p className=""><b>Drink (10Kg Co2)</b></p>
                                        <p className="analytics-sub">You bought 2L of Coke, with 10Kg/L you have contributed around 10kg of Co2</p>
                                    </Col>
                                    <Col className="col-lg-6">
                                        <FontAwesomeIcon className="chart-col1" icon={faChartArea} />
                                    </Col>
                                </Row>
                            </div>
                        </Jumbotron>
                    </div>
                    <div className="chart chart-1">
                        <Jumbotron>
                            <div className="container">
                                <Row className="row">
                                    <Col className="col-lg-6">
                                        <FontAwesomeIcon className="chart-col3" icon={faChartLine} />
                                    </Col>
                                    <Col className="col-lg-6">
                                        <p className=""><b>Travel (8Kg Co2)</b></p>
                                        <p className="analytics-sub">You have took car to office, which have contributed 5Kg more Co2 more than usual.</p>
                                    </Col>
                                </Row>
                            </div>
                        </Jumbotron>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Analysis;