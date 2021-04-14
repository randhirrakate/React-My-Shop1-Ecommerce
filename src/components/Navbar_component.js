import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import React, { useState, useEffect } from "react";
import {getAllcategories} from '../screens/API';

import '../App.css';


function Navbar_component()
{

    const [categories, setcategories] = useState([]);

    const preload = () => {
        getAllcategories().then(data => {
          if (data.error) {
            console.log(data.error);
          } else {
            setcategories(data);
          }
        });
      };
    
      useEffect(() => {
        preload();
      }, []);


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
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            {categories.map((category, index) => {
                            return (
                            
                            <NavDropdown.Item href="#action/3.1"> {category.name}</NavDropdown.Item>
                            );
                             })}
                           
                        </NavDropdown>

                    <Link className={"nav-link " + MyActiveClass("/Mycart")} to="/Mycart">My Cart</Link>
                    <Link className={"nav-link " + MyActiveClass("/login")} to="/login">Login</Link>
                    <Link className={"nav-link " + MyActiveClass("/register")} to="/register">Register</Link>
                    <Link className={"nav-link " + MyActiveClass("/Contact")}  to="/Contact_us">Contact_us</Link> 
                    <Link className={"nav-link " + MyActiveClass("/Insert_product")}  to="/Insert_product">Insert_product</Link>
                    <Link className={"nav-link " + MyActiveClass("/Insert_category")}  to="/Insert_category">Insert_category</Link>
                    <Link className={"nav-link " + MyActiveClass("/ProductInformation")}  to="/ProductInformation">ProductInformation</Link>
                    <Link className={"nav-link " + MyActiveClass("/Testing")}  to="/Testing">Testing</Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navbar_component;