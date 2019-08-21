/*jshint esversion: 6 */

import React from 'react';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';


export default function Header() {
  return (
    <div className='Header'>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="/">Главная</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/catalogue/">Каталог</Nav.Link>
          <Nav.Link href="/partners/">Партнеры</Nav.Link>
          <Nav.Link href="/about/">О нас</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Поиск" className="mr-sm-2" />
          <Button variant="outline-info">Искать</Button>
        </Form>
      </Navbar>
    </div>
  );
};
