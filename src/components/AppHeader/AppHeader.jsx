/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const AppHeader = () => {
  return (
    <>
      <header>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Emoji Search</Navbar.Brand>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default AppHeader;
