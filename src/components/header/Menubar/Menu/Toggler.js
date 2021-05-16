import React from 'react'

import {ReactComponent as Symbol} from '../../../../assets/shared/mobile/icon-hamburger.svg'
import burgerCSS from './burger.module.css'
import {NavbarToggler, Nav, NavItem, NavLink} from 'reactstrap'
import useDimensions from '../../../utility/sizing/useDimensions'

function Toggler(props) {
    const {width, height} = useDimensions()
    const [isOpen, setIsOpen] = React.useState(false);
    props.setOpenState(isOpen)

    const toggle = () => setIsOpen(!isOpen);

    return (
        <NavbarToggler className={burgerCSS.toggleButton} onClick={toggle} >
             <Symbol className={burgerCSS.burgersymbol} /> 
        </NavbarToggler>

    ) 

    
}

export default Toggler