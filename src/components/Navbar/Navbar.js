import React, { useState } from 'react';
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

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavbarBrand href="/">Financial Life</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Ledger">Ledger</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Planning
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/Planning" >
                  Financial Planning 
                </DropdownItem>
                {/* <DropdownItem href="/Expense">
                  Planning Results
                </DropdownItem> */}
                <DropdownItem divider />
                <DropdownItem href="/Planningresult" >
                  Planning Results
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/Balance">Balance</NavLink>
            </NavItem>
            <NavItem>
              <Button outline color="primary" href="/Login" >Log Out</Button>{' '}
            </NavItem>
          </Nav>
        </Collapse>
        </nav>
    </div>
  );
}
export default Navbar;