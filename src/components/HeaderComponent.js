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
            <Jumbotron>
              <div className="container">
                <div className="row row-header">
                  <div className="col-12 col-sm-6">
                    <h1>Forecast information </h1>
                    <p>Enter the city and Country name below and press find button to get wheather information</p>
                  </div>
                </div>
              </div>
            </Jumbotron>
          </React.Fragment>
        );
    }
}

export default Header;