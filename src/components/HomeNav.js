
import Nav from './../../node_modules/react-bootstrap/Nav';
import Navbar from "./../../node_modules/react-bootstrap/Navbar";
import "./../style/HomeNav.css";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";

function HomeNav() {
    return (
        <div data-bs-theme="dark" className="navbar">
            <div className="navbar-contents">
                <div className='brand-title'>
                    <div className='homenav-logo'><Link to='/'><box-icon name='pizza' type='solid' color='#ffffff' size='md'></box-icon></Link></div>
                    <div className="navbarTitle"><Navbar.Brand href="#home"><Link to='/' className="link-text" id='logo'>Pizza Bruno</Link></Navbar.Brand></div>
                </div>
                <div className='navbar-links'>
                    <Nav className="me-auto">
                    <Nav.Link ><Link to='/' className='link-text'>Home</Link></Nav.Link>
                    <Nav.Link ><Link to='/menu' className='link-text'>Menu</Link></Nav.Link>
                    <Nav.Link ><Link to='/login' className='link-text'>Login</Link></Nav.Link>
                    <div className='homenav-cart'><box-icon name='cart-alt' color='#f6f6f6' size='md'></box-icon></div>
                    </Nav>
                </div>
            </div>
        </div>
    );
}

export default HomeNav