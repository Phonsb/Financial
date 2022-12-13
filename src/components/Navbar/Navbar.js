import React, { useState, useEffect } from 'react';
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';
import './navbar.css';
import firebase from '../firebase/firebase'
import 'firebase/compat/auth'

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavbarBrand href="/Home"><h6 className="mt-1 mx-4 text-light" >Financial Life</h6></NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="mr-auto mb-1 mx-4" navbar>
            <NavItem>
              <NavLink href="/Home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Transaction">Transaction</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Summaries">Summaries</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Planning
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/Planning" >
                  Money Planning
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/Planningresult" >
                  Planning Results
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/Calculator">Calculator</NavLink>
            </NavItem>
            <NavItem>
              <Button outline color="primary" onClick={() => firebase.auth().signOut()}>logout</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </nav>
    </div>
  );
}
export default Navbar;