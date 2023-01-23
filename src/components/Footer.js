// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
//             <p>Copyright &copy; {new Date().getFullYear()} | React Web Developer</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
       <div className="container">
             <div className="row">
               <div className="col-md-12">
                 <p>Copyright &copy; {new Date().getFullYear()} | React Web Developer</p>
               </div>
             </div>
           </div>
         </footer>
  )
}

export default Footer