import React, {Fragment} from 'react'
import {Navbar, NavbarBrand, Nav, NavLink, Collapse, NavItem, NavbarToggler } from 'reactstrap'
import {Link, BrowserRouter as Router} from 'react-router-dom'
import {ReactComponent as Symbol} from '../../assets/shared/mobile/icon-hamburger.svg'

import {ReactComponent as Logo} from '../../assets/shared/desktop/logo.svg'
import headerCSS from './header.module.css'
import useDimensions from '../utility/sizing/useDimensions'
import 'bootstrap/dist/css/bootstrap.min.css';
import burgerCSS from './burger.module.css'


function Header() {
    const svgRef = React.useRef()
    const burgerRef = React.useRef()
    const {width, height} = useDimensions()
    const [isOpen, setIsOpen] = React.useState(false);
    
    const toggle = () => setIsOpen(!isOpen);
    
    React.useEffect(() => {
        console.log("rendered")
        if(width <= 414 && width > 330 ) {
            svgRef.current.setAttribute('viewBox',"110 -5 42 42")
            svgRef.current.setAttribute('width', "180")
            svgRef.current.setAttribute('height', "27")
        } else if(width > 414 && width < 768 ) {
            svgRef.current.setAttribute('width',"237")
            svgRef.current.setAttribute('viewBox',"110 0 30 30")
            svgRef.current.setAttribute('height', "27")
        }  else if (width < 330 ) {
            svgRef.current.setAttribute('viewBox',"110 -5 42 42")
            svgRef.current.setAttribute('width', "180")
            svgRef.current.setAttribute('height', "27")
        } 
        else if (width > 768 && width < 1024 ) {
            // svgRef.current.setAttribute('viewBox', null)
            svgRef.current.setAttribute('width', "237")
            svgRef.current.setAttribute('height', "27")
        } else if (width >= 1025 ) {
            svgRef.current.setAttribute('viewBox', "100 -5 40 40")
            svgRef.current.setAttribute('width', "600")
            svgRef.current.setAttribute('height', "100")
        } 
    },[width])
    

    return (
        
        <div>
        <Navbar className={headerCSS.menubar} color="light" light expand="md">
            <NavbarBrand className={headerCSS.brand}><Logo className={headerCSS.logo} ref={svgRef} /></NavbarBrand>
                <NavbarToggler className={burgerCSS.toggleButton} onClick={toggle} />
                <Collapse  isOpen={isOpen} navbar>
                <Nav className='mr-auto' navbar>
                    <NavItem>
                        <NavLink className={`${headerCSS.linkItem} ${headerCSS.firstItem}`} href="/">HOME</NavLink>  
                    </NavItem>
                    <NavItem>
                        <NavLink className={headerCSS.linkItem} href="/about">ABOUT US</NavLink>
                    </NavItem>
                    <NavItem>
                            <NavLink className={headerCSS.linkItem} href="/plan">CREATE YOUR PLAN</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        </div>
       
    )
}

export default Header