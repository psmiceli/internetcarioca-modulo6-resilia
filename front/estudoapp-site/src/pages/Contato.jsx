import {Container, Button, Form} from 'react-bootstrap'
import Banners from '../components/Banners'
import Botaoconexao from '../components/Botaoconexao.jsx'
import Squad from '../components/Squad.jsx'

function Contato() {

    const handleSubmit = (event) => {
        event.preventDefault()
        alert('Mensagem enviada com sucesso!')
        event.target.reset()
    }

    return (
        <Container className='conteudo-margin'>
            <Banners />
            <Botaoconexao />
            <h1>Contato</h1>
            <p>Entre em contato conosco</p>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="Nome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu nome completo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Digite seu e-mail" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Mensagem">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar contato
                </Button>
            </Form>
            <Squad />
        </Container>
    );
}

export default Contato;