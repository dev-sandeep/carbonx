import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faUsers, faGamepad } from '@fortawesome/free-solid-svg-icons'

function Header() {

    return (
        <section className="menu-horizontal">
            {/* <ButtonToolbar>
                <Button variant="outline-secondary"><FontAwesomeIcon icon={faList} /> Feeds</Button>
                <Button variant="outline-secondary"><FontAwesomeIcon icon={faUsers} /> Community</Button>
                <Button variant="outline-secondary"><FontAwesomeIcon icon={faGamepad} /> Leaders</Button>
            </ButtonToolbar> */}
        </section>
    );
}

export default Header;