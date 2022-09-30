import React from "react"
import Image from "react-bootstrap/Image"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Button from "react-bootstrap/Button"
import "./styles.css"

export default function MainBanner() {
  return (
      <>
      {/* // <div className="group-941">
      //   <p className="txt-688">MAKING MUSIC, BUILDING COMMUNITY.</p>
      //   <img
      //   src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/euo110lfw25-205%3A37?alt=media&token=d661fc82-b276-4008-a63b-3642d13041d4"
      //   alt="Not Found"
      //   className="orchestra-pana-1"
      // />
      // </div> */}


      <Container className = 'contr-main'>
        <Row className = 'align-items-center'>
          <Col>
            <h3 className='txt-688'> Teaching Music, Building Community!</h3>
          </Col>
          <Col xs={{span: 9, offset: 1}} md = {{span: 5, offset: 1}}>
            <Image fluid
              src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/euo110lfw25-205%3A37?alt=media&token=d661fc82-b276-4008-a63b-3642d13041d4"
            />
          </Col>
        </Row>
        <Row className = 'descr'>
          <p> Arpeggia is an organization driven to provide high-
              quality, affordable music education to children

              interested in starting their musical journey. 
          </p>
        </Row>
        <Stack direction="horizontal" gap={3} className = 'justify-content-center'>
          <Button size = 'lg' className='signup-but'>
            Sign up now!
          </Button>
        </Stack>
      </Container>
      

      </>
  )
}
