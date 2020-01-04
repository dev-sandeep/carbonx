import React, { useState, useEffect } from 'react'
import Header from './Header'
import NavHorizontal from './NavHorizontal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faChartArea, faChartPie } from '@fortawesome/free-solid-svg-icons'

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

function Analysis() {
    /* get the context instance */
    const [data, setData] = useState(0);
    const [timerVar, setTimerVar] = useState(0);

    let food = ["asparagus", "apples", "avacado", "alfalfa", "acorn ", "almond", "arugala"]
    let foodCo2 = ["12", "13", "21", "11", "10 ", "19", "21"]

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
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Search Food"
                            aria-label="Srearch Food"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    <ListGroup>
                        {food.map((item, i) => (
                            <ListGroup.Item>{item} ({foodCo2[i]} Kg)</ListGroup.Item>
                        ))}

                    </ListGroup>
                </div>

                <div class="footer footer-content">
                    Save
                </div>
            </div>
        </section>
    );
}

export default Analysis;