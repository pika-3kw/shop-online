import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import './NavbarCustom.css'
import MiniCart from "../../components/MiniCart/MiniCart";

const NavbarCustom = props => {
    return (
        <div className='Navbar'>
            <Navbar bg="primary" expand="sm" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <div>
                    <MiniCart />
                </div>
            </Navbar>
        </div>
    )
}
export default NavbarCustom;