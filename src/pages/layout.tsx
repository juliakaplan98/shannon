import { Outlet, Link } from "react-router-dom";
import '../App.css';

const Layout = () => {
  return (
    <>
      <div className="row">
        <b>Connect:</b>
        <b>facebook</b>
        <b>LinkedIn</b>
        <b className="split">Phone Number</b>
        <b className="split">Address Line 2 |</b>
        <b className="split">Address Line 1 |</b>
      </div>
      
      
      <div className="banner">
        <h1 > Ark Construction Safety and Health, Inc</h1>
      </div>
        
      <div className="navbar">
        <Link to="/">Home</Link>
        <div className="dropdown">
          <button className="dropbtn">Services</button>
          <div className="dropdown-content">
            <Link to='/services/onsite'>On-Site Support</Link>
            <Link to='/services/plan'>Health & Safety Plans</Link>
            <Link to='/services/record'>Record Keeping</Link>
            <Link to='/services/report'>Reporting</Link>
            <Link to='/services/inspection'>Inspections & Audits per OSHA</Link>
          </div>
        </div>  
        <Link to='/company'>Company</Link>
        <Link to='/classes'>Classes</Link>
        <Link to='/mission'>Mission Statement</Link>
        <Link to='/careers'>Careers</Link>
        <Link to="/contact">Contact</Link>
      </div>
       
      <div className="slideshow"/>

      <div className="voutlet">
        
        <Outlet />
      </div>
      

      <div className="footer"><h3>This is my footer</h3></div>
      
    </>
  )
};

export {};