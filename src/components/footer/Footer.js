import React from 'react'
import footerCSS from './footer.module.css'
import {Nav, NavItem, NavLink} from 'reactstrap'
import {ReactComponent as Logo} from '../../assets/shared/desktop/logoWhite.svg'
import {ReactComponent as Facebook} from '../../assets/shared/desktop/icon-facebook.svg'
import {ReactComponent as Instagram} from '../../assets/shared/desktop/icon-instagram.svg'
import {ReactComponent as Twitter} from '../../assets/shared/desktop/icon-twitter.svg'

function Footer() {
    return (
        <footer className={footerCSS.container}>
            <Logo className={footerCSS.logo} />
             <Nav vertical>
                <NavItem>
                    <NavLink className={footerCSS.link} href="#">HOME</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={footerCSS.link} href="#">ABOUT US</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={footerCSS.link} href="#">CREATE YOUR PLAN</NavLink>
                </NavItem>
            </Nav>
           <span><Facebook className={footerCSS.social} /> <Instagram className={footerCSS.social} /> <Twitter className={footerCSS.social} /></span>
        </footer>
        
    )
    
}

export default Footer;