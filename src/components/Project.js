import React, {useEffect} from 'react'
import { Button } from 'react-bootstrap'
import Binarplatinum from "../assets/platinum.png"
import Binargold from "../assets/binargold.png"
import Binaradmin from "../assets/binaradmin.png"
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
        }
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