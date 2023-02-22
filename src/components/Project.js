import React, {useEffect} from 'react'
import { Button } from 'react-bootstrap'
import Binarplatinum from "../assets/platinum.png"
import Binargold from "../assets/binargold.png"
import Binaradmin from "../assets/binaradmin.png"
import Trippy from "../assets/Trippy.jpg"
import gpt from "../assets/gpt-3.jpg"
import "./Projects.css"
import AOS from "aos"




const Project = () => {


    useEffect (() => {
        AOS.init({
          duration : 1000,
         
        })
    
      }, [])
    const projectData = [
        {
            
            image : <img src={Binarplatinum} height="300px" width="100%" border="1px solid black" />,
            tittle : "Binar Platinum Challenge",
            desc : "A Binar car rental website, adding the feature of selecting the rental date, and making payments, a website created by a team, Applying media handling processes (Video/Image/PDF) in the challenge,Using web storage (local storage, session storage, or cookie) in the challenge, Using JWT and Oauth for registration and login processes, Using Rest API for communication between frontend and backend",
            link : "https://binar-platinum-nu.vercel.app/",
            repo : "https://github.com/iqbalrizan/Binar-Platinum"
        },
        {
            image : <img src={Binaradmin} height="300px" width="100%" border="1px solid black" />,
            tittle : "Binar Platinum Challenge Admin",
            desc : "A website used by admin for Binar rental car, for managing data and orders, It has a dashboard and a car list, admin can filter based on existing car data",
            link : "https://binar-car-rental-platinum-admin.vercel.app/login",
            repo : "https://github.com/iqbalrizan/Binar-platinum-Admin"
        },
        {
            image : <img src={Binargold} height="300px" width="100%" border="1px solid black"/>,
            tittle : "Binar gold Challenge",
            desc : "A website that was developed solo, a car rental website, implementing a UI layout based on the design in Figma and Implementing asynchronous processes when fetching data from API",
            link : "https://gold-challenge.vercel.app/",
            repo : "https://github.com/iqbalrizan/belajarreact"
        },
        {
            image : <img src={Trippy} height="300px" width="100%" border="1px solid black"/>,
            tittle : "Trippy",
            desc : "Developing a example tour and travel website from start to finish. Ensured the website runs smoothly and is responsive, with an attractive and user-friendly interface. Worked independently to develop engaging features and content for users",
            link : "https://trippy-tau.vercel.app/",
            repo : "https://github.com/iqbalrizan/Trippy"
        },
        {
            image : <img src={gpt} height="300px" width="100%" border="1px solid black"/>,
            tittle : "GPT-3",
            desc : "Fully Responsive Modern UI/UX Website in React JS, Taken from Figma and implemented into code form, turn them into four modern, responsive, beautifully-designed applications",
            link : "https://gpt-3-psi.vercel.app/",
            repo : "https://github.com/iqbalrizan/gpt-3"
        },

    ]
  return (
    <div className='container-fluid my-5 mx-0' id='projects'>
        <h1 className='text-center fw-light'>Projects</h1>
        <hr />
        <br />
        <br />
        <div className="container project-container">
            {projectData.map((item, index) => (
                <div className="row justify-content-between mx-0 p-5 mb-5 project" key={index} data-aos="fade-up">
                    <div className="col-md-6 project-img">
                        {item.image}
                    </div>
                    <div className="col-md-6">
                        <h4>{item.tittle}</h4>
                        <p className='fw-light text-desc'>{item.desc}</p>
                            <a href={item.link} target="_blank">
                            <Button variant="dark">LINK</Button>
                            </a>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <a href={item.repo} target="_blank">
                            <Button variant="primary">REPO</Button>
                            </a>
                        
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Project