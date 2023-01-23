import React from 'react'
import { Row, Col } from 'react-bootstrap'
import logo from "../assets/logo.png"
import "./Navbar.css"

const Navbar = () => {
  return (
    <section className='navbar'>
        <Row className='navbarrow'>
            <Col xl={8} md={8} sm={8} xs={4}>
            <img src={logo} alt="" className='navbarlogo'/>
            </Col>
            <Col xl={4} md={4} sm={4} xs={8} >

                <ul className='navigation'>
                    
                    <li> <a href="#skill">
                Skill
               </a></li>
                    <li><a href="#projects">
                Projects
               </a></li>
                </ul>
               
              
               

            </Col>
        </Row>
    </section>
  )
}

export default Navbar