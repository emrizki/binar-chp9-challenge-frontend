import React, { Component } from 'react'
import {Collapse,Nav,Navbar,NavbarBrand,NavbarToggler,NavItem} from 'reactstrap'
import { Link } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'

class NavigationBar extends Component {
    state = { isOpen: false }
    toggleCollapse = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const { isOpen } = this.state
        return (
            <Navbar className={styles.navbar} expand="lg">
                <NavbarBrand className={styles.navbrand} href="/">BINAR GAMES</NavbarBrand>
                <NavbarToggler onClick={this.toggleCollapse} /><Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem className="px-2">
                            <Link className={styles.navlink} to="/">Home</Link>
                        </NavItem>
                        <NavItem className="px-2">
                            <Link className={styles.navlink} to="/listgames">List Games</Link>
                        </NavItem>
                        <NavItem className="px-2">
                            <Link className={styles.navlink} to="/login">Login</Link>
                        </NavItem>
                        <NavItem className="px-2">
                            <Link className={styles.navlink} to="/register">Sign Up</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default NavigationBar
