'use client'

/*eslint-disable*/
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from "next/image";

// nodejs library to set properties for components
// import { PropTypes } from "prop-types";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  FormGroup,
  Form,
  Input,
//   InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

import logoImage from "../../assets/img/brand/argon-react.png";

var ps;

type RoutesType = {
    layout: string,
    path: string,
    icon: string,
    name: string
}[]

type Props = {
    routes: RoutesType,
    logo: {
        innerLink: string,
        outerLink: string,
        imgSrc: string,
        imgAlt: string
    }
}

function Sidebar(props: Props) {
  // used for checking current route
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName: string) => {
    return usePathname().indexOf(routeName) > -1;
  };
  // toggles collapse between opened and closed (true/false)
  const toggleCollapse = () => {
    setCollapseOpen(!collapseOpen);
  };
  // closes the collapse
  const closeCollapse = () => {
    setCollapseOpen(false);
  };
  // creates the links that appear in the left menu / Sidebar
  const createLinks = (routes: RoutesType) => {
    console.log(routes);
    return routes.map((prop, key) => {
      return (
        <NavItem key={key} active={activeRoute(prop.layout + prop.path)}>
            <NavLink
              href="#pablo"
              active={activeRoute(prop.layout + prop.path)}
              onClick={closeCollapse}
            >
              <i className={prop.icon} />
              {prop.name}
            </NavLink>
        </NavItem>
      );
    });
  };

  const { routes, logo } = props;

  let navbarBrand = (
    <NavbarBrand className="pt-0">
      <Image 
        alt={logo.imgAlt} 
        className="navbar-brand-img" 
        src={logoImage} 
        width={150} />
    </NavbarBrand>
  );

  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light bg-white"
      expand="md"
      id="sidenav-main"
    >
      <Container fluid>
        {/* Brand */}
        <span>{navbarBrand}</span>

        {/* Collapse */}
        <div className="navbar-collapse">
          
          {/* Navigation */}
          <Nav navbar>{createLinks(routes)}</Nav>
          {/* Divider */}
          <hr className="my-3" />
          
          {/* Heading */}
          <h6 className="navbar-heading text-muted">Documentation</h6>
          {/* Navigation */}
          <Nav className="mb-md-3" navbar>
            <NavItem>
              <NavLink href="https://demos.creative-tim.com/argon-dashboard-react/#/documentation/overview?ref=adr-admin-sidebar">
                <i className="ni ni-spaceship" />
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://demos.creative-tim.com/argon-dashboard-react/#/documentation/colors?ref=adr-admin-sidebar">
                <i className="ni ni-palette" />
                Buy Us Coffee
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://demos.creative-tim.com/argon-dashboard-react/#/documentation/alerts?ref=adr-admin-sidebar">
                <i className="ni ni-ui-04" />
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>

        </div>
      </Container>
    </Navbar>
  );
}

export default Sidebar;