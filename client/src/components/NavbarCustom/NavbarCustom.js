import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import './NavbarCustom.css'
import MiniCart from "../../components/MiniCart/MiniCart";

const NavbarCustom = props => {
    return (
        <div className='Navbar'>
            <Navbar bg="primary" expand="sm" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/category">Category</Link>
                </Nav>
                <div>
                    <MiniCart />
                </div>
            </Navbar>
        </div>
    )
}
export default NavbarCustom;