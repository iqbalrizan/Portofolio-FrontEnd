import React, {useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai"
import "./AboutMe.css"
import AOS from "aos"

const AboutMe = () => {

    useEffect (() => {
        AOS.init({
          duration : 1500,
         
        })
    
      }, [])
  return (
   <section>
    <h1 className='text-center fw-light'>About me</h1>
        <hr />
        <br />
        <br />  
    <Container>
        
        <Row>
            <Col>
            <h4 data-aos="flip-up">I'm an enthusiastic and detail-oriented Frontend Software Engineer seeking for new opportunities & challenges with Company to use my skills in coding, troubleshooting complex problems, and assisting in the timely completion of projects. Other than my strong knowledge and interest in IT fields, I also graduated from Gunadarma University with a Bachelor of Psychology degree, which firmly makes me an excellent candidate.</h4>
            </Col>
        </Row>
        <br />
        <br />
        <Row data-aos="flip-down">
            <Col className='am-col1'>
            <h1>
                <a href="https://www.linkedin.com/in/muhammad-iqbal-r-732503230/" target="_blank" className='no-decoration'>
                <AiFillLinkedin size="70px" className='am-logo'/>
                </a>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <a href="https://github.com/iqbalrizan" target="_blank">
                <AiFillGithub size="70px" className='am-logo' />
                </a>
            </h1>
            </Col>
           
        </Row>
    </Container>
   </section>
            
  )
}

export default AboutMe