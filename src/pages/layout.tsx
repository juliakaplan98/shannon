import { Outlet, Link } from "react-router-dom";
import '../App.css';

const Layout = () => {
  return (
    <>
      <div className="topnav">
        <Link to="/">Home</Link>
          <div className="dropdown">

            <div className="dropbtn">
              Services 🠟
            </div>

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
      
      <header className="header">
        Ark Construction Safety and Health, Inc
      </header>

      <div className="voutlet">
        <Outlet />
      </div>
    </>
  )
};

export default Layout;