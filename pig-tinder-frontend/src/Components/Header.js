import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap'

function Header(args) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <>
    
      <div id="parent">
        <div id="NotFound"></div>
        <div id="PigNew"></div>
      </div>
      



 
  <div>
  <Navbar {...args}>
    <NavbarBrand href="/">Guinea Pigs of Flavor</NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="me-auto" navbar>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://www.dreamstime.com/guinea-pigs-cooked-grill-ecuador-traditional-delicious-food-south-america-roasted-pig-cuy-open-fire-ready-to-eat-image149311967">
            Please don't click me! 
          </NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Meet the Pigs
          </DropdownToggle>
          <DropdownMenu left>
            <DropdownItem>Mike the Crazy pig</DropdownItem> 
            <DropdownItem>Larry the Funny pig</DropdownItem>
            <DropdownItem>Jerry the handicapped pig</DropdownItem>
         
            
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      <NavbarText>Ways to eat the pigs</NavbarText>
    </Collapse>
  </Navbar>
</div>
</>
)
}


export default Header