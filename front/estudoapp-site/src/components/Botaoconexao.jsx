import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Swal from 'sweetalert2';
import '../assets/css/main.css'

function BotaoConexao() {


  const [conectado2, setConectado2] = useState(false);

  function handleButtonClick() {
    setConectado2(true);
  }

  function handleLog() {
    Swal.fire({
      title: 'Login',
      html:
        '<input type="text" id="username" class="swal2-input" placeholder="Username">' +
        '<input type="password" id="password" class="swal2-input" placeholder="Password">',
      focusConfirm: false,
      preConfirm: () => {
        const username = Swal.getPopup().querySelector('#username').value;
        const password = Swal.getPopup().querySelector('#password').value;

        if (!username || !password) {
          Swal.showValidationMessage('Por favor, entre com seu login e senha');
        }

        // Check if username and password are correct
        const isUserValid = checkUserCredentials(username, password);

        if (!isUserValid) {
          Swal.showValidationMessage('Login e/ou senha inválidos!');
        }

        return { username, password };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setConectado2(true);
        Swal.fire({
          title: 'Logado com sucesso!',
          text: `Bem vindo, ${result.value.username}`,
          icon: 'success',
        });
      }
    });
  }

  function checkUserCredentials(username, password) {
    // Replace with your own authentication logic
    return username === 'usuario' && password === '123';
  }

  function App() {
    return (
      <div>
        <button onClick={handleLog}>Login</button>
      </div>
    );
  }


  return (

        <div>
          <LinkContainer to='/'>
            <Nav.Link onClick={handleLog}>
              <button className={`botaoConexao ${conectado2 ? 'conectado2' : ''}`}>
                {conectado2 ? 'Carioca Conectado' : 'Fique conectado em qualquer lugar do Rio!'}
              </button>
            </Nav.Link>
          </LinkContainer>
        </div>
  )
}

export default BotaoConexao;