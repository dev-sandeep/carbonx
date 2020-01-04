import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav'
// import { Link } from 'react-router-dom';
// import UrlCall from './../ContextApi/UrlCall'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import UseBaseContext from './../ContextApi/UseBaseContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
    /* get the context instance */
    const { setData, getData } = UseBaseContext();

    /* a must declaration to set and get the data */
    const [searchVal, setSearchVal] = useState('');

    /* responsible for handling the changes */
    function handleChange(e) {
        setSearchVal(e.target.value);
    }

    //handle the search click button
    function onSearchClick() {
        /**
         * Standard way to set or get the data
         * ACROSS THE UNIVERSE!
         */
        setData(searchVal, "search");
    }

    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#home"><span className="logo">CarbonX</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <FontAwesomeIcon className="nav-icon" icon={faBars} />
            </Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto m-top-4">
                    <Nav.Link className="navlink" href="/login">login</Nav.Link>
                    <Nav.Link className="navlink" href="/feed">feed</Nav.Link>
                    <Nav.Link className="navlink" href="/community">community</Nav.Link>
                    <Nav.Link className="navlink" href="/profile">profile</Nav.Link>
                    <Nav.Link className="navlink" href="/analysis">analysis</Nav.Link>
                    <Nav.Link className="navlink" href="/input">input</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;