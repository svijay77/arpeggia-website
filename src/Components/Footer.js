import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import React from "react"

import instagram from '../assets/glyph-logo_May2016-310x310.png'
import linkedin from '../assets/linkedin.png'

import './styles.css'

export default function Footer() {
    return (
        <>
            <Card className = 'footer'>
                <Card.Header> Stay Connected With Us! </Card.Header>
                <Card.Body> 
                    <Row>
                        <Col><Card.Text> <a href='https://instagram.com/arpeggia_uiuc?r=nametag'> <Image src={instagram} style={{width: 30, height: 30}} responsive/> </a></Card.Text></Col>
                        <Col> <Card.Text> <a href="mailto:arpeggiauiuc@gmail.com?body=My custom mail body">Contact Us!</a></Card.Text> </Col>
                        <Col> <Card.Text> <a href='https://www.linkedin.com/company/arpeggia-uiuc/about/'> <Image src={linkedin} style={{width: 30, height: 30}} responsive /> </a> </Card.Text> </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}