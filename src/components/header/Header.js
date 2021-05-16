import React, {Fragment} from 'react'
import {Navbar, NavbarBrand, Nav, NavLink, Collapse, NavItem, NavbarToggler } from 'reactstrap'

import Toggler from './Menubar/Menu/Toggler'
import {ReactComponent as Logo} from '../../assets/shared/desktop/logo.svg'
import headerCSS from './header.module.css'
import useDimensions from '../utility/sizing/useDimensions'
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    const svgRef = React.useRef()
    const burgerRef = React.useRef()
    const {width, height} = useDimensions()
    const [openState,setOpenState] = React.useState(false)
   
    
    React.useEffect(() => {
        if(width <= 414 && width > 330 ) {
            svgRef.current.setAttribute('viewBox',"110 -5 42 42")
            svgRef.current.setAttribute('width', "180")
        } else if(width > 414 && width < 768 ) {
            svgRef.current.setAttribute('width',"237")
            svgRef.current.setAttribute('viewBox',"110 0 30 30")
        }  else if (width < 330 ) {
            svgRef.current.setAttribute('viewBox',"110 -5 42 42")
            svgRef.current.setAttribute('width', "180")
        } else if (width >= 768 ) {
            svgRef.current.setAttribute('viewBox', null)
            svgRef.current.setAttribute('width', "237")
        } 
    },[width])
    

    return (
        <div>
        <Navbar className={headerCSS.menubar} color="light" light expand="md">
            <NavbarBrand className={headerCSS.brand}><Logo className={headerCSS.logo} ref={svgRef} /></NavbarBrand>
            <Toggler setOpenState={setOpenState}></Toggler>
            <Collapse isOpen={openState} navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink className={headerCSS.linkItem} href="/components/">HOME</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={headerCSS.linkItem} href="/components/">ABOUT US</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={headerCSS.linkItem} href="/components/">CREATE YOUR PLAN</NavLink>
                </NavItem>
            
            </Nav>
            </Collapse>
        </Navbar>
        </div>
    )
}

export default Header