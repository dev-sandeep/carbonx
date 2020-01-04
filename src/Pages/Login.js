import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
function Home() {
    /* get the context instance */
    // const [data, setData] = useState(0);

    // useEffect(() => (
    //     setData(0)
    // ), []);

    /* all of the main content goes here  */
    return (
        <section className="home-page m-top-3 login-header">
            <div className="row1 ov-y-hide">
                <div className="container">
                    <div className="header">
                        <div className="title">
                            CarbonX
                        </div>
                    </div>
                    <div className="login-body">
                        <Form>
                            <Form.Group controlId="formBasicEmail" className="form-margin">

                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className="form-margin">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="secondary" size="lg" className="form-margin" block>
                                <Link className="col-white" to="/">SIGN IN</Link>
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;