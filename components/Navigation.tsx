import React, { useState, useEffect } from 'react';
import { greetings, socialLinks } from '../portfolio';
import Headroom from 'headroom.js';
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from 'reactstrap';

const Navigation = () => {
  const [collapseClasses, setCollapseClasses] = useState('');
  const onExiting = () => setCollapseClasses('collapsing-out');

  const onExited = () => setCollapseClasses('');

  useEffect(() => {
    let headroom = new Headroom(document.getElementById('navbar-main')!);
    // initialise
    headroom.init();
  });

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand href="/" className="mr-lg-5">
              <h2 className="text-white" id="nav-title">
                {greetings.name}
              </h2>
            </NavbarBrand>
            <button
              className="navbar-toggler"
              aria-label="navbar_toggle"
              id="navbar_global"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <h3 className="text-black" id="nav-title">
                      Menu
                    </h3>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem>
                  <div onClick={onExiting}>
                    <NavLink href="/#skills">
                      Skills
                    </NavLink>
                  </div>
                </NavItem>
                <NavItem>
                  <div onClick={onExiting}>
                    <NavLink href="/#education">
                      Education
                    </NavLink>
                  </div>
                </NavItem>
                <NavItem>
                  <div onClick={onExiting}>
                    <NavLink href="/#experience">
                      Experience
                    </NavLink>
                  </div>
                </NavItem>
                <NavItem>
                  <div onClick={onExiting}>
                    <NavLink href="/#projects">
                      Projects
                    </NavLink>
                  </div>
                </NavItem>
                {socialLinks.linkedin && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Linkedin"
                      className="nav-link-icon"
                      href={socialLinks.linkedin}
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Linkedin
                      </span>
                    </NavLink>
                  </NavItem>
                )}
                {socialLinks.itchio && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Itchio"
                      className="nav-link-icon"
                      href={socialLinks.itchio}
                      target="_blank"
                    >
                      <img className="fa" src='/img/icons/common/itchio.svg' style={{width: "13.72px", height: "16px", filter: "invert(1)"}}/>
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Itchio
                      </span>
                    </NavLink>
                  </NavItem>
                )}
                {socialLinks.github && (
                  <NavItem>
                    <NavLink
                      rel="noopener"
                      aria-label="Github"
                      className="nav-link-icon"
                      href={socialLinks.github}
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                  </NavItem>
                )}
                
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Navigation;
