// import React, {useEffect} from 'react'
// import { Button } from 'react-bootstrap'
// import Binarplatinum from "../assets/platinum.png"
// import Binargold from "../assets/binargold.png"
// import Binaradmin from "../assets/binaradmin.png"
// import Snapup from "../assets/snapup.jpg"
// import imdb from "../assets/imdb-clone.jpg"
// import Trippy from "../assets/Trippy.jpg"
// import gpt from "../assets/gpt-3.jpg"
// import Cartsy from "../assets/Cartsy.jpg"
// import "./Projects.css"
// import AOS from "aos"




// const Project = () => {


//     useEffect (() => {
//         AOS.init({
//           duration : 1000,
         
//         })
    
//       }, [])
//     const projectData = [
//         {
            
//             image : <img src={Binarplatinum} height="300px" width="100%"  />,
//             tittle : "Binar Platinum Challenge",
//             desc : "A Binar car rental website, adding the feature of selecting the rental date, and making payments, a website created by a team, Applying media handling processes (Video/Image/PDF) in the challenge,Using web storage (local storage, session storage, or cookie) in the challenge, Using JWT and Oauth for registration and login processes, Using Rest API for communication between frontend and backend",
//             link : "https://binar-platinum-nu.vercel.app/",
//             repo : "https://github.com/iqbalrizan/Binar-Platinum"
//         },
//         {
//             image : <img src={Binaradmin} height="300px" width="100%" />,
//             tittle : "Binar Platinum Challenge Admin",
//             desc : "A website used by admin for Binar rental car, for managing data and orders, It has a dashboard and a car list, admin can filter based on existing car data",
//             link : "https://binar-car-rental-platinum-admin.vercel.app/login",
//             repo : "https://github.com/iqbalrizan/Binar-platinum-Admin"
//         },
//         {
//             image : <img src={Binargold} height="300px" width="100%"/>,
//             tittle : "Binar gold Challenge",
//             desc : "A website that was developed solo, a car rental website, implementing a UI layout based on the design in Figma and Implementing asynchronous processes when fetching data from API",
//             link : "https://gold-challenge.vercel.app/",
//             repo : "https://github.com/iqbalrizan/belajarreact"
//         },
//         {
//             image : <img src={Snapup} height="300px" width="100%"/>,
//             tittle : "SnapUp E-Commerce Website",
//             desc : "Project in creating an example e-commerce website using React and Redux toolkit technologies. Using data dummy and local storage implementation. Contributed to designing a modern, minimalist interface that is user-friendly",
//             link : "https://snap-up-ecommerce.vercel.app/",
//             repo : "https://github.com/iqbalrizan/SnapUp-Ecommerce"
//         },
//         {
//             image : <img src={imdb} height="300px" width="100%"/>,
//             tittle : "IMDb-Clone Website",
//             desc : "The website is a movie and TV show database, providing information on various titles including plot summaries, ratings and reviews, release dates, and other related information. The website has a modern and sleek design, with easy-to-navigate menus and visually appealing graphics and images. It provides an enjoyable user experience for those looking to browse and discover new titles to watch.",
//             link : "https://im-db-clone-gamma.vercel.app/",
//             repo : "https://github.com/iqbalrizan/IMDb-clone"
//         },
//         {
//             image : <img src={Cartsy} height="300px" width="100%"/>,
//             tittle : "Cartsy E-Commerce Website",
//             desc : "The Cartsy e-commerce website CV is a non-commercial project built using React.js, using Redux Toolkit with Product category menu, product search, shopping cart, and checkout functionalities",
//             link : "https://e-commerce-cartsy.vercel.app/",
//             repo : "https://github.com/iqbalrizan/E-commerce-Cartsy"
//         },
//         {
//             image : <img src={Trippy} height="300px" width="100%"/>,
//             tittle : "Trippy",
//             desc : "Developing a example tour and travel website from start to finish. Ensured the website runs smoothly and is responsive, with an attractive and user-friendly interface. Worked independently to develop engaging features and content for users",
//             link : "https://trippy-tau.vercel.app/",
//             repo : "https://github.com/iqbalrizan/Trippy"
//         },
//         {
//             image : <img src={gpt} height="300px" width="100%"/>,
//             tittle : "GPT-3",
//             desc : "Fully Responsive Modern UI/UX Website in React JS, Taken from Figma and implemented into code form, turn them into four modern, responsive, beautifully-designed applications",
//             link : "https://gpt-3-psi.vercel.app/",
//             repo : "https://github.com/iqbalrizan/gpt-3"
//         },

//     ]
//   return (
//     <div className='container-fluid my-5 mx-0' id='projects'>
//         <h1 className='text-center fw-light'>Projects</h1>
//         <hr />
//         <br />
//         <br />
//         <div className="container project-container">
//             {projectData.map((item, index) => (
//                 <div className="row justify-content-between mx-0 p-5 mb-5 project" key={index} data-aos="fade-up">
//                     <div className="col-md-6 project-img">
//                         {item.image}
//                     </div>
//                     <div className="col-md-6">
//                         <h4>{item.tittle}</h4>
//                         <p className='fw-light text-desc'>{item.desc}</p>
//                             <a href={item.link} target="_blank">
//                             <Button variant="dark">LINK</Button>
//                             </a>
//                             &nbsp;
//                             &nbsp;
//                             &nbsp;
//                             <a href={item.repo} target="_blank">
//                             <Button variant="primary">REPO</Button>
//                             </a>
                        
//                     </div>
//                 </div>
//             ))}
//         </div>

//     </div>
//   )
// }

// export default Project


import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import { Button } from 'react-bootstrap'
import Binarplatinum from "../assets/platinum.png"
import Binargold from "../assets/binargold.png"
import Binaradmin from "../assets/binaradmin.png"
import Snapup from "../assets/snapup.jpg"
import imdb from "../assets/imdb-clone.jpg"
import Trippy from "../assets/Trippy.jpg"
import gpt from "../assets/gpt-3.jpg"
import Cartsy from "../assets/Cartsy.jpg"
import youtube from "../assets/Youtube-Clone.jpg"
import reactDashboard from "../assets/React-Dashboard.jpg"
import "./Projects.css"
import AOS from "aos"

const Project = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3; // Jumlah proyek yang ditampilkan per halaman

  useEffect (() => {
            AOS.init({
              duration : 1000,
             
            })
        
          }, [])

  const projectData = [
            {
                
                image : <img src={Binarplatinum} height="300px" width="100%"  />,
                tittle : "Binar Rent Car Platinum",
                desc : "A Binar car rental website, adding the feature of selecting the rental date, and making payments, a website created by a team, Applying media handling processes (Video/Image/PDF) in the challenge,Using web storage (local storage, session storage, or cookie) in the challenge, Using JWT and Oauth for registration and login processes, Using Rest API for communication between frontend and backend",
                link : "https://binar-platinum-nu.vercel.app/",
                repo : "https://github.com/iqbalrizan/Binar-Platinum"
            },
            {
                image : <img src={Binaradmin} height="300px" width="100%" />,
                tittle : "Binar Rent Car Admin Dashboard",
                desc : "A website used by admin for Binar rental car, for managing data and orders, It has a dashboard and a car list, admin can filter based on existing car data",
                link : "https://binar-car-rental-platinum-admin.vercel.app/login",
                repo : "https://github.com/iqbalrizan/Binar-platinum-Admin"
            },
            {
                image : <img src={Binargold} height="300px" width="100%"/>,
                tittle : "Binar Rent Car Gold",
                desc : "A website that was developed solo, a car rental website, implementing a UI layout based on the design in Figma and Implementing asynchronous processes when fetching data from API",
                link : "https://gold-challenge.vercel.app/",
                repo : "https://github.com/iqbalrizan/belajarreact"
            },
            {
                image : <img src={Snapup} height="300px" width="100%"/>,
                tittle : "SnapUp E-Commerce Website",
                desc : "Project in creating an example e-commerce website using React and Redux toolkit technologies. Using data dummy and local storage implementation. Contributed to designing a modern, minimalist interface that is user-friendly",
                link : "https://snap-up-ecommerce.vercel.app/",
                repo : "https://github.com/iqbalrizan/SnapUp-Ecommerce"
            },
            {
                image : <img src={youtube} height="300px" width="100%"/>,
                tittle : "Youtube Clone",
                desc : "The website is a YouTube clone that aims to replicate the functionality and design of the popular video-sharing platform. It provides users with a familiar interface where they can search for videos, watch them, and interact with the content. The website features a responsive layout and supports various video playback options, including fullscreen mode and video quality selection. Users can also like, comment on, and share videos, as well as subscribe to channels. Overall, the YouTube clone offers a similar experience to the original platform, allowing users to explore and enjoy a wide range of videos.",
                link : "https://youtube-clone-seven-nu.vercel.app/",
                repo : "https://github.com/iqbalrizan/Youtube-clone"
            },
            {
                image : <img src={reactDashboard} height="300px" width="100%"/>,
                tittle : "React Dashboard",
                desc : "The website is a React dashboard that offers a comprehensive set of tools and features for data visualization and management. It provides users with a sleek and modern interface where they can monitor and analyze various metrics and data points. The dashboard includes interactive charts, graphs, and tables that allow users to visualize data trends and make informed decisions. Additionally, it offers functionalities such as user management, data filtering, and export options for generating reports. With its intuitive design and powerful features, the React dashboard serves as a valuable tool for businesses and organizations to track and analyze their data effectively.",
                link : "https://react-dashboard-lime.vercel.app/",
                repo : "https://github.com/iqbalrizan/React-Dashboard"
            },
            {
                image : <img src={imdb} height="300px" width="100%"/>,
                tittle : "IMDb-Clone Website",
                desc : "The website is a movie and TV show database, providing information on various titles including plot summaries, ratings and reviews, release dates, and other related information. The website has a modern and sleek design, with easy-to-navigate menus and visually appealing graphics and images. It provides an enjoyable user experience for those looking to browse and discover new titles to watch.",
                link : "https://im-db-clone-gamma.vercel.app/",
                repo : "https://github.com/iqbalrizan/IMDb-clone"
            },
            {
                image : <img src={Cartsy} height="300px" width="100%"/>,
                tittle : "Cartsy E-Commerce Website",
                desc : "The Cartsy e-commerce website CV is a non-commercial project built using React.js, using Redux Toolkit with Product category menu, product search, shopping cart, and checkout functionalities",
                link : "https://e-commerce-cartsy.vercel.app/",
                repo : "https://github.com/iqbalrizan/E-commerce-Cartsy"
            },
            {
                image : <img src={Trippy} height="300px" width="100%"/>,
                tittle : "Trippy",
                desc : "Developing a example tour and travel website from start to finish. Ensured the website runs smoothly and is responsive, with an attractive and user-friendly interface. Worked independently to develop engaging features and content for users",
                link : "https://trippy-tau.vercel.app/",
                repo : "https://github.com/iqbalrizan/Trippy"
            },
            {
                image : <img src={gpt} height="300px" width="100%"/>,
                tittle : "GPT-3",
                desc : "Fully Responsive Modern UI/UX Website in React JS, Taken from Figma and implemented into code form, turn them into four modern, responsive, beautifully-designed applications",
                link : "https://gpt-3-psi.vercel.app/",
                repo : "https://github.com/iqbalrizan/gpt-3"
            },
           
            
        ]

        const totalProjects = projectData.length;
const totalPages = Math.ceil(totalProjects / projectsPerPage);
const indexOfLastProject = currentPage * projectsPerPage;
const indexOfFirstProject = indexOfLastProject - projectsPerPage;
const currentProjects = projectData.slice(indexOfFirstProject, indexOfLastProject);

const handlePageChange = (page) => {
    setCurrentPage(page);
  };
    
  return (
        <div className='container-fluid my-5 mx-0' id='projects'>
            <h1 className='text-center fw-light'>Projects</h1>
            <hr />
            <br />
            <br />
            <div className="container project-container">
                {currentProjects.map((item, index) => (
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
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

    
        </div>
      )
    }

 

export default Project;
