import React from "react"
import Image from "react-bootstrap/Image"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./styles.css"

export default function MainBanner() {
  return (
      <>
      <Container className = 'justify-items-center'>
        <Row className = 'align-items-start'>
          <Col>
            <h3 className='txt-688'> Teaching Music, Building Community!</h3>
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
