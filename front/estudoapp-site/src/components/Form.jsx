import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Formulario(props) {
    return (
        <Form onSubmit={props.onSubmit}>
            <Form.Group controlId="formBasicName">
                <Form.Label>{props.label}</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Digite o nome do plano"
                    value={props.value}
                    onChange={props.onChange}
                />
            </Form.Group><br></br>
            <Button variant="primary" type="submit">
                Buscar
            </Button>
        </Form>
    );
}

export default Formulario;