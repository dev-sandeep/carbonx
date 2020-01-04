import React, { useState, useEffect } from 'react'
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faUsers, faGamepad } from '@fortawesome/free-solid-svg-icons'

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
                                <div className="content">
                                    <FontAwesomeIcon icon={faList} />
                                    <span>Feeds</span>
                                </div>
                            </div>
                            <div className="menu-single">
                                <div className="content">
                                    <FontAwesomeIcon icon={faUsers} />
                                    <span>Community</span>
                                </div>
                            </div>
                            <div className="menu-single">
                                <div className="content">
                                    <FontAwesomeIcon icon={faGamepad} />
                                    <span>Leaders</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;