import React, { useState, useEffect } from 'react'
import Header from './Header'
import NavHorizontal from './NavHorizontal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faChartArea, faChartPie } from '@fortawesome/free-solid-svg-icons'

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Nav from 'react-bootstrap/Nav'

function Analysis() {
    /* get the context instance */
    let foodArr = [{ name: "asparagus", selected: true, co2: 12 }, { name: "apples", selected: false, co2: 13 }, { name: "avacado", selected: false, co2: 21 }, { name: "alfalfa", selected: false, co2: 11 }, { name: "acorn", selected: false, co2: 17 }, { name: "almond", selected: false, co2: 19 }, { name: "arugala", selected: false, co2: 12 }]
    let filter = '';

    const [food, setFood] = useState(foodArr);
    // const [foodCo2, setFoodCo2] = useState(foodCo2Arr);

    let search = (e) => {
        let filter = e.target.value;
        let res = foodArr.filter((item) => {
            return item.name.startsWith(filter)
        });
        setFood(res);
    }

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
                            onChange={search}
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    <ListGroup>
                        {food.map((item, i) => (
                            <ListGroup.Item onClick={(e) => {
                                food[i].selected = !food[i].selected;
                                if (food[i].selected) {
                                    e.target.className = 'list-group-item selected-item';
                                } else {
                                    e.target.className = 'list-group-item';
                                }

                            }} key={i}>{item.name} ({item.co2} Kg)</ListGroup.Item>
                        ))}

                    </ListGroup>
                </div>

                <div className="footer footer-content">
                    <Nav.Link className="navlink" href="/analysis">Save</Nav.Link>
                </div>
            </div>
        </section>
    );
}

export default Analysis;