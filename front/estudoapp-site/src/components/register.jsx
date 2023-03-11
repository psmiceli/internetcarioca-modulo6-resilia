// Registro.js
import { useState } from 'react';
import { createBrowserHistory } from 'history';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormGroup } from 'react-bootstrap';
import CmsApi from '../api/CmsApi';

const api = CmsApi();

const Registro = (props) => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    const history = createBrowserHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await api.postRegister(user);
            if (response.ok) {
                console.log('Usuário cadastrado com sucesso!');
                history.push('/LoginUsuario'); // redirecionar para página de login após cadastro
            } else {
                console.error('Erro ao cadastrar usuário');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <Form>
            <FormGroup controlId="formBasicName">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Digite o seu nome"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Digite o seu e-mail"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Digite a sua senha"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                />
            </FormGroup>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Cadastrar
            </Button>
        </Form>
    );
};

export default Registro;