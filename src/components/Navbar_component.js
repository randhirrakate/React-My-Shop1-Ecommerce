import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";

import '../App.css';


function Navbar_component()
{

    const MyActiveClass = (path) =>
    {

        if(window.location.pathname === path)
        {
            return "text-danger";
        }
        else
        {
            return "text-black";
        }
    }

    return(
        <div>
            <Navbar bg="light"  variant="light" expand="lg">
                <Navbar.Brand href="/">Randhir-Myshop1</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ml-auto">
                    <Link className={"nav-link " + MyActiveClass("/")} to="/">Home</Link>
                    <Link className={"nav-link " + MyActiveClass("/Mycart")} to="/Mycart">My Cart</Link>
                    <Link className={"nav-link " + MyActiveClass("/login")} to="/login">Login</Link>
                    <Link className={"nav-link " + MyActiveClass("/register")} to="/register">Register</Link>
                    <Link className={"nav-link " + MyActiveClass("/Contact")}  to="/Contact">Contact us </Link>
                </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navbar_component;