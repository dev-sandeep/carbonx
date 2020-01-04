import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import NavHorizontal from './NavHorizontal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faUser, faGamepad } from '@fortawesome/free-solid-svg-icons'
import * as d3 from "d3";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

function Profile() {
    /* get the context instance */
    const [data, setData] = useState(0);
    const [timerVar, setTimerVar] = useState(0);
    let users = ["Malak", "Tabitha", "Beverly", "Bella", "Kierran", "Dante", "Shayan", "Tara"]
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
                    <div className="chart">
                        <Jumbotron>
                            <h1>Hello, Allex</h1>
                            <p>
                                This is a simple hero unit, a simple jumbotron-style component for calling
                                extra attention to featured content or information.
                            </p>
                            <p>
                                <Button variant="primary">
                                    <Link className="col-white" to="/analysis">Analysis</Link>
                                </Button>
                            </p>
                        </Jumbotron>
                    </div>

                    <div className="statistic">
                        <Row className="row">
                            <Col className="col-lg-4 bg-stats">
                                <p className="profile-title"><b>15M</b></p>
                                <p className="text-center">Kg Co2 saved</p>
                            </Col>
                            <Col className="col-lg-4 bg-stats">
                                <p className="profile-title"><b>24Km</b></p>
                                <p className="text-center">Travelled</p>
                            </Col>
                            <Col className="col-lg-4 bg-stats">
                                <p className="profile-title"><b>1,890</b></p>
                                <p className="text-center">Steps Today</p>
                            </Col>
                        </Row>
                    </div>

                    <div className="follows m-top-7">
                        <b>Follows</b>
                        <Row className="row m-top-2">
                            {users.map((user) => (
                                <Col className="col-lg-3 follows">
                                    <p className="follow-img">
                                        <img className="follow-img" src="https://picsum.photos/seed/picsum/50/50" />
                                    </p>
                                    <p className="text-center m-top-2">@{user}</p>
                                </Col>
                            ))}

                        </Row>
                    </div>

                    <div className="Nav-btns">
                        <ButtonToolbar>
                            <Button variant="outline-success ma-r-3">Analysis</Button>
                            <Button variant="outline-warning ma-l-3">Target</Button>
                        </ButtonToolbar>
                    </div>
                    <div className="toast"></div>
                    <div className="bio"></div>
                    <div className="followers"></div>
                </div>
            </div>
        </section>
    );
}

export default Profile;