import React, {useEffect} from 'react'
import notesapp from "../assets/notesapp.png"
import budgetplanner from "../assets/budgetplanner.png"
import moviedatabase from "../assets/moviedatabase.png"
import calculator from "../assets/calculator.png"
import quizapp from "../assets/quizapp.png"
import { Col, Row, Button, Card } from 'react-bootstrap'
import "./SimpleProject.css"
import AOS from "aos"

const SimpleProject = () => {


    useEffect (() => {
        AOS.init({
          duration: 1500
         
        })
    
      }, [])
    
  return (
    <div className='container-fluid my-5 mx-0'>
        <h1 className='text-center fw-light'>Simple Projects</h1>
        <hr />
        <br />
        <br />
        <Row className='row-simpleproject'>
            <Col className='sp-col1'>
            <Card style={{width : "31rem"}} className="card-sp" data-aos="fade-up-right" data-aos-delay="700">
      <Card.Img variant="top" src={notesapp} />
      <Card.Body>
        <Card.Title>Notes App</Card.Title>
        <Card.Text>
        A simple app for creating notes for daily activities
        </Card.Text>
        <a href="https://notes-app-eight-bay.vercel.app/" target="_blank">
                            <Button variant="dark">LINK</Button>
                            </a>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <a href="https://github.com/iqbalrizan/notes-app" target="_blank">
                            <Button variant="primary">REPO</Button>
                            </a>
      </Card.Body>
    </Card>
            </Col>
            <Col className='sp-col1'>
            <Card style={{width : "31rem"}} className="card-sp" data-aos="fade-up" data-aos-delay="600">
      <Card.Img variant="top" src={moviedatabase} />
      <Card.Body>
        <Card.Title>Movie Database</Card.Title>
        <Card.Text>
        A website that provides a list of the latest films and a search filter
        </Card.Text>
        <a href="https://movie-database-app.vercel.app/" target="_blank">
                            <Button variant="dark">LINK</Button>
                            </a>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <a href="https://github.com/iqbalrizan/movie-database-app" target="_blank">
                            <Button variant="primary">REPO</Button>
                            </a>
      </Card.Body>
    </Card>
            </Col>
            <Col className='sp-col1'>
            <Card style={{ width: '31rem' }} className="card-sp" data-aos="fade-up-left" data-aos-delay="500">
      <Card.Img variant="top" src={budgetplanner} />
      <Card.Body>
        <Card.Title>Budget Planner App</Card.Title>
        <Card.Text>
        A budget planner website to calculate monthly expenses
        </Card.Text>
        <a href="https://budget-planner-nine.vercel.app/" target="_blank">
                            <Button variant="dark">LINK</Button>
                            </a>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <a href="https://github.com/iqbalrizan/Budget-Planner" target="_blank">
                            <Button variant="primary">REPO</Button>
                            </a>
      </Card.Body>
    </Card>
            </Col>
        </Row>
        <Row className='row-simpleproject'>
            <Col className='sp-col2'><Card style={{ width: '40rem' }} className="card-sp" data-aos="fade-up-right" data-aos-delay="400">
      <Card.Img variant="top" src={calculator} />
      <Card.Body>
        <Card.Title>Calculator</Card.Title>
        <Card.Text>
        A website containing a simple calculator for everyday use
        </Card.Text>
        <a href="https://calculator-app-theta-livid.vercel.app/" target="_blank">
                            <Button variant="dark">LINK</Button>
                            </a>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <a href="https://github.com/iqbalrizan/calculator-app" target="_blank">
                            <Button variant="primary">REPO</Button>
                            </a>
      </Card.Body>
    </Card></Col>
            <Col className='sp-col2'><Card style={{ width: '40rem' }} className="card-sp" data-aos="fade-up-left" data-aos-delay="300">
      <Card.Img variant="top" src={quizapp} />
      <Card.Body>
        <Card.Title>Quiz App</Card.Title>
        <Card.Text>
        A website containing simple quizzes on the theme of MLB (Major League Baseball)
        </Card.Text>
        <a href="https://react-quiz-app-three.vercel.app/" target="_blank">
                            <Button variant="dark">LINK</Button>
                            </a>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <a href="https://github.com/iqbalrizan/react-quiz-app" target="_blank">
                            <Button variant="primary">REPO</Button>
                            </a>
      </Card.Body>
    </Card></Col>
        </Row>

    </div>
  )
}

export default SimpleProject