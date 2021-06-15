import React from 'react'
import footerCSS from './footer.module.css'
import {Nav, NavItem, NavLink} from 'reactstrap'

function Footer() {
    return (
        <footer className={footerCSS.container}>
             <Nav vertical>
                <NavItem>
                    <NavLink href="#">HOME</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">ABOUT US</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">CREATE YOUR PLAN</NavLink>
                </NavItem>
            </Nav>
        </footer>
        
    )
    
}

export default Footer;