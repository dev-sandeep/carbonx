import React, { useState, useEffect } from 'react'
import Header from './Header'
import NavHorizontal from './NavHorizontal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faUser, faGamepad } from '@fortawesome/free-solid-svg-icons'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'

function Community() {
    /* get the context instance */
    // const [data, setData] = useState(0);

    let leaderShip = [
        { name: 'Rose' },
        { name: 'Abbie' },
        { name: 'Tommy' },
        { name: 'Imogen' },
        { name: 'Francesca' },
        { name: 'Eden' },
        { name: 'Tiffany' },
    ];

    const [user, setUser] = useState(leaderShip);

    let search = (e) => {
        let filter = e.target.value;
        let res = leaderShip.filter((item) => {
            return item.name.startsWith(filter)
        });
        setUser(res);
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
                            placeholder="Search User"
                            aria-label="Srearch User"
                            aria-describedby="basic-addon2"
                            onChange={search}
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    <Card>
                        <ListGroup variant="flush">
                            {user.map((item, i) => (
                                <ListGroup.Item>
                                    {/* <div className="icon user-logo">
                                        <FontAwesomeIcon icon={faUser} />
                                    </div> */}
                                    <h3> {item.name}</h3>
                                    <h6>{Math.floor(i * 10 * Math.random(10))}Kg less Co2 this week</h6>
                                    {
                                        (i % 3 == 0) ? <Badge variant="success">Follow</Badge> : ''
                                    }
                                </ListGroup.Item>
                            ))}


                        </ListGroup>
                    </Card>
                </div>
            </div>
        </section>
    );
}

export default Community;