import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';

function header() {
    return (
        <Navbar bg='dark' sticky='top' className='Header'>
            <Container>
                <Navbar.Brand> cherryGlow</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default header