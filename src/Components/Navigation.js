import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import React from "react"
import './styles.css'


function Navigation() {
    return (
        <>
        <Navbar collapseOnSelect expand='sm' bg = 'light' variant = 'light'>
            <Container>
                    <Navbar.Brand href = "/">
                        <img src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/f934c5zjpp-241%3A16?alt=media&token=4c8831d4-93ff-4bd3-a854-f1364b7f012e"
                            height="70"
                            alt = 'arpeggia logo'/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"/>

                    <Nav>
                        <Nav.Item>
                            <Nav.Link href = "/aboutus"> About Us </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href = "/ourteam"> Our Team </Nav.Link>
                        </Nav.Item>
                    </Nav>
                
            </Container>
        </Navbar>
        </>
    );
}

export default Navigation;

