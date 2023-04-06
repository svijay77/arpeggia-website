import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Navigation from "./Navigation"
import Footer from "./Footer"
import './styles.css'


export default function AboutUs() {
    return(
        <>
        <Navigation />
            <Container className='justify-items-center'>
                <Row className='align-items-start'>
                    <Col>   
                        <h3 className='txt-689'> About Us</h3>
                        <p>
                        We’re Arpeggia, a Champaign-Urbana based non-profit 501(c)(3) and Registered Student Organization 
                        (RSO) at The University of Illinois at Urbana-Champaign.

                        Our mission is to make music education accessible to children in the Champaign-Urbana community 
                        by connecting at-need students with experienced college musicians. This is done through one-on-one
                         lessons, group classes, and mentorship. Our volunteer music instructors serve as positive role 
                         models while providing high-quality, affordable music education to children interested in 
                         starting their musical journey.
                        </p>
                    </Col>
                </Row>
                <Row className='align-items-start'>
                    <Col>   
                        <h3 className='txt-689'> How We Got Started </h3>
                        <p>
                        We got our start after winning 54: Startup Weekend hosted by Founders in 2021. Since then, we’ve 
                        been pushing to expand our efforts through the entire Champaign-Urbana community. Our team of over
                         10 volunteers currently teach at Urbana Middle School and soon, other schools throughout the 
                         community. Our student volunteers come from a variety of degree programs and are able to teach 
                         an assortment of exciting instruments such as saxophone, guitar, piano, and trumpet. We’re proud 
                         to have a dedicated team of diverse talents and backgrounds that are able to address the needs of
                          our students!
                        </p>
                    </Col>
                </Row>
                <Row className='align-items-start'>
                    <Col>   
                        <h3 className='txt-689'> What Do We Offer? </h3>
                        <p>
                        Music lessons are often expensive, ranging from $30-$60/hour. This, paired with finding a 
                        trustworthy instructor and transportation to-and-from lessons, can make the entire experience 
                        surrounding music lessons stressful for parents and children alike. On top of that, billing 
                        and scheduling are another inconvenience.Our classes are conveniently held after school, 
                        during Urbana Middle School’s SPLASH program. This way, reliable scheduling and transportation 
                        are already set up through UMS and students are in a comfortable and safe environment - 
                        not someone’s garage-turned-music studio. Additionally, our diverse group of volunteers give 
                        students the opportunity to control their own learning experience. If a student learning guitar 
                        would rather spend a lesson learning how to start on trumpet, we’re willing to switch gears and 
                        get them started. If a saxophone player is interested in trying out a group piano class, we can 
                        make it happen.

                        </p>
                    </Col>
                </Row>
                <Row className='align-items-start'>
                    <Col>   
                        <h3 className='txt-689'> Contact Us </h3>
                        <p>
                        Feel free to contact us at ArpeggiaUIUC@gmail.com and we’ll be more than happy to answer any 
                        questions you may have. Otherwise, we encourage you to follow us on Facebook, Instagram, and 
                        LinkedIn to stay up-to-date on events, fundraisers, and other exciting opportunities to get 
                        involved and support us!Any University of Illinois at Urbana-Champaign students interested in 
                        joining our organization to gain teaching experience, leadership opportunities, and a fun 
                        volunteer experience can send us an email at ArpeggiaUIUC@gmail.com and we’ll respond as 
                        soon as we can!
                        </p>
                    </Col>
                </Row>
            </Container>
            <hr></hr>
            <Footer />
        </>
    )
}

