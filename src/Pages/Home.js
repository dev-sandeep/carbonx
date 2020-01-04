import React, { useState, useEffect } from 'react'
import Header from './Header'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faUsers, faUser, faNewspaper, faChartBar } from '@fortawesome/free-solid-svg-icons'

function Home() {
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
            <div className="row1 ov-y-hide">
                <div className="container">
                    <div className="col-lg-12">
                        <div className="menu-list">

                            <div className="menu-single">
                                <Nav.Link className="navlink" href="/input">
                                    <div className="content">
                                        <span>New Entry</span>
                                        <FontAwesomeIcon icon={faNewspaper} />

                                    </div>
                                </Nav.Link>
                            </div>
                            <div className="menu-single">
                                <Nav.Link className="navlink" href="/profile">
                                    <div className="content">
                                        <FontAwesomeIcon icon={faUser} />
                                        <span>Profile</span>
                                    </div>
                                </Nav.Link>
                            </div>
                            <div className="menu-single">
                                <Nav.Link className="navlink" href="/feed">
                                    <div className="content">
                                        <FontAwesomeIcon icon={faList} />
                                        <span>Feeds</span>
                                    </div>
                                </Nav.Link>
                            </div>
                            <div className="menu-single">
                                <Nav.Link className="navlink" href="/community">
                                    <div className="content">
                                        <FontAwesomeIcon icon={faUsers} />
                                        <span>Community</span>
                                    </div>
                                </Nav.Link>
                            </div>
                            <div className="menu-single">
                                <Nav.Link className="navlink" href="/analysis">
                                    <div className="content">
                                        <FontAwesomeIcon icon={faChartBar} />
                                        <span>Analytics</span>
                                    </div>
                                </Nav.Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;