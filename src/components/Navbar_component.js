import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';

function Navbar_component()
{
    return(
        <div>
            <Navbar bg="dark"  variant="dark" expand="lg">
                <Navbar.Brand href="/">Randhir-Myshop1</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/">My Cart</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                    <Nav.Link href="/about_us">About Us</Nav.Link>
                </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navbar_component;