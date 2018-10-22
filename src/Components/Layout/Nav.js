import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';


export default class BrowseRPGNav extends Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">BrowseRPG</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>Character</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Locations</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Battle</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}