import React from "react"
import Image from "react-bootstrap/Image"
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import pic1 from '../assets/IMG_1977_trimmed.jpeg'
import pic2 from '../assets/IMG_1988_trimmed.jpeg'
import pic3 from '../assets/IMG_1991_trimmed.jpeg'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./styles.css"

export default function MainBanner() {
  return (
      <>
      <Container className = 'justify-items-center'>
        <Row>
            <Carousel>
              <Carousel.Item>
                  <img className='carousel-img' src={pic1} alt='one of our teachers'/>
                  <Carousel.Caption> <h3> Making Music, Building Community! </h3></Carousel.Caption>
              </Carousel.Item>
              
              <Carousel.Item>
                  <img className='carousel-img' src={pic2} alt='one of our teachers'/>
                  <Carousel.Caption> <h3> Making Music, Building Community </h3></Carousel.Caption>
              </Carousel.Item>
              
              <Carousel.Item>
                  <img className='carousel-img' src={pic3} alt='one of our teachers'/>
                  <Carousel.Caption> <h3> Making Music, Building Community </h3></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
        </Row>
        <Row className = 'align-items-start'>
          <Col>
            <h3 className='txt-688'> Making Music, Building Community!</h3>
          </Col>
          <Col className = 'text-center'>
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/euo110lfw25-205%3A37?alt=media&token=d661fc82-b276-4008-a63b-3642d13041d4"
              />
          </Col>
        </Row>
        <Row >
        <Col className = 'descr'>
            <p> Arpeggia is an organization driven to provide high-
                quality, affordable music education to children
                interested in starting their musical journey. 
            </p>
          </Col>
        </Row>
        <hr className = 'hor-line'/>
        <Row className = 'form-descr'>
            <Col>
            <p> If you're a musician in college and interested in teaching music to the local community, 
              sign up on our Google Form!
            </p>
            </Col>
            <Col className = 'mygform'>
              <iframe title="signup form" src="https://docs.google.com/forms/d/e/1FAIpQLSekkHYQb3p5q62Khw30OUTPDom9ffZ8vJg0iSDwt2pmz6ZHMw/viewform?embedded=true" width="750" height="520" frameborder="0" marginheight="0" marginwidth="0" className = 'mygform' >Loading…</iframe>
            </Col>
        </Row>
      </Container>
      </>
  );
}
