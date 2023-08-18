// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/layout";

// import Onsite from "./pages/services/onsite";
// import Plan from "./pages/services/plan";
// import Record from "./pages/services/record";
// import Report from "./pages/services/report";
// import Inspection from "./pages/services/inspection";


// export const Main = () => {
//     return (
        
//         <BrowserRouter>
//             <Routes>
//                 <Route path='/' element={<Layout />}>
//                     <Route index element={<Home />} />
//                         <Route path="services/onsite" element={<Onsite />} />
//                         <Route path="services/plan" element={<Plan />} />
//                         <Route path="services/record" element={<Record />} />
//                         <Route path="services/report" element={<Report />} />
//                         <Route path="services/inspection" element={<Inspection />} />
//                     <Route path="company" element={<Company/>}/>
//                     <Route path="classes" element={<Classes/>}/>
//                     <Route path="mission" element={<Mission/>}/>
//                     <Route path="careers" element={<Careers/>}/>
//                     <Route path="contact" element={<Contact />} />
//                     <Route path="*" element={<NoPage />} />
//                 </Route>
//             </Routes>
//         </BrowserRouter>

//     );
// }

// export default Main;

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation'
import Home from "./pages/home";
import Company from "./pages/company";
import Classes from "./pages/classes";
import Mission from "./pages/mission";
import Careers from "./pages/careers";
import Contact from "./pages/contact";
// import NoPage from "./pages/nopage";




const Main: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/company' element={<Company />} />
          <Route path='/classes' element={<Classes />} /> 
          <Route path='/mission' element={<Mission />} />
          <Route path='/careers' element={<Careers />} />            
          <Route path='/contact' element={<Contact />} />
        </Routes>
        
      </Router> 

    </>
  )
}

export default Main