import React, { useState, useEffect } from 'react'
import Header from './Header'
import NavHorizontal from './NavHorizontal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faUsers, faGamepad } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card'

function Feed() {
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
            <div className="row1 ov-y-hide">
                <div className="">
                    <div className="col-lg-12">
                        <div className="menu-list">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Lorem Ipsum</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">- Jan, 12.09.12 </Card.Subtitle>
                                    <Card.Text>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                    </Card.Text>
                                    <Card.Link href="#">Read More</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="menu-list">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Lorem Ipsum</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Allex, 21.10.20 </Card.Subtitle>
                                    <Card.Text>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                    </Card.Text>
                                    <Card.Link href="#">Read More</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="menu-list">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Lorem Ipsum</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Toby, 22.12.20 </Card.Subtitle>
                                    <Card.Text>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                    </Card.Text>
                                    <Card.Link href="#">Read More</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Feed;