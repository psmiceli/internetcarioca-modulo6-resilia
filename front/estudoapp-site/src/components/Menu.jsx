import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Swal from 'sweetalert2';

function Menu() {

  const [conectado, setConectado] = useState(false);

  function handleButtonClick() {
    setConectado(true);
  }

  function sair() {
    window.location.reload();
  }

  function handleButtonRota(){
    window.location.replace('/register');
  }

  function handleButtonClick() {
    window.location.replace('/LoginUsuario');
  
  }

  function checkUserCredentials(username, password) {
    // Replace with your own authentication logic
    return username === 'usuario' && password === '123';
  }

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" style={{ backgroundColor: '#3C89D6' }}>
      <Container>


        <div className='conexaoHeader'>
          <LinkContainer to='/'>
            <Nav.Link onClick={handleButtonClick}>
              <button className='register'>
                <img className='iconeConexaoHeader' src='../src/img/logo/svg/iconebranco.svg' />
                {conectado ? 'Conectado' : 'Conecte-se agora!'}
              </button>
            </Nav.Link>
          </LinkContainer>
          {conectado && <button class='botaosair' onClick={sair}>sair</button>}
        </div>

        <div>
          <button className='register' onClick={handleButtonRota}>cadastre-se</button>
        </div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/funcionalidades">
              <Nav.Link>Planos</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/sobre">
              <Nav.Link>Sobre</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contato">
              <Nav.Link>Contato</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;