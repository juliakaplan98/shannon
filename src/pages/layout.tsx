import { Outlet, Link } from "react-router-dom";
import '../App.css';

const Layout = () => {
  return (
    <>
      <nav className="vnav">
          <div className="menu-p"><Link to="/">Home</Link></div>
          <div className="menu-p"><Link to="/blogs">Blogs</Link></div>
          <div className="menu-p"><Link to="/contact">Contact</Link></div>
          <div className="menu-p"><Link to='/Julia'>Julia</Link></div>
      </nav>
      <div className="voutlet">
        <Outlet />
      </div>
    </>
  )
};

export default Layout;