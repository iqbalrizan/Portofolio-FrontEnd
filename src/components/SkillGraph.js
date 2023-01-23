import React, { useEffect } from 'react'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./SkillGraph.css"
import AOS from 'aos';



const SkillGraph = () => {

  useEffect (() => {
    AOS.init({
      duration : 1000,
     
    })

  }, [])

    const roundProgressStyles = {
        pathColor: `rgb(80, 80, 255)`,
    textColor: 'rgb(80, 80, 255)',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
    pathTransitionDuration: 0.5
   
    }

     const Circular = ({val, text}) => {
         return (
            <div className="col-md-1 mb-2 skill-col" data-aos="zoom-in-up">
            <CircularProgressbar value={val} maxValue={10} text={val +"/10"} styles={buildStyles({...roundProgressStyles})} />
            <p className='fw-light text-secondary mb-0 text-center'>{text}</p>
              </div>
        )
        
     }
  return (

    <div className="container-fluid my-5" id='skill' >
        <h1 className='text-center fw-light'>Skill Graph</h1>
        <hr />
        <br />
        <br />
        <div className="row justify-content-center mx-0" >
            <Circular val={9} text={"HTML"} />
            <Circular val={8} text={"CSS"} />
            <Circular val={7} text={"JavaScript"} />
            <Circular val={8.5} text={"Bootstrap"} />
            <Circular val={8} text={"GIT"} />
            <Circular val={8} text={"React"} />
            <Circular val={7} text={"Redux"} />
        </div>
    </div>






    // <section>
    //     <Container>
    //     <Row className='skill-row'>

    //         <Col><Circular val={7} text={"HTML"} /></Col>
    //         <Col><Circular val={7} text={"HTML"} /></Col>
    //         <Col><Circular val={7} text={"HTML"} /></Col>
    //     </Row>
    //     </Container>
        
    // </section>
  )
}

export default SkillGraph