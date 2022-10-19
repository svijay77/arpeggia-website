import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import React from "react"
import './styles.css'

export default function Footer() {
    return (
        <>
            <Card className = 'footer'>
                <Card.Header> Stay Connected With Us! </Card.Header>
                <Card.Body> 
                    <Card.Text> <span> email: </span> arpeggiauiuc@gmail.com </Card.Text>
                    <Card.Text> <span> instagram: </span> @arpeggia_uiuc </Card.Text>
                    <Card.Text> <span> linkedin: </span> arpeggia uiuc </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}