import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
          <React.Fragment>
            <Navbar dark expand="md">
              <div className="container">
                <NavbarBrand className="mr-auto" href="/">
                  <span>Weather Finder</span>
                </NavbarBrand>
                <Nav>
                  <NavItem>
                    <NavLink className="nav-link" to="/home">
                      <span className="fa fa-home fa-lg"> Home </span>
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </Navbar>
            
          </React.Fragment>
        );
    }
}

export default Header;