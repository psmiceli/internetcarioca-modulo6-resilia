import { Container, Table, Form, Button } from 'react-bootstrap'
// import { useHistory } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../assets/css/listafuncionalidades.css'

// const handleClick = () => {
//     history.push('/register');
// };

function ItemFuncionalidade(item) {
    return (
        <Col sm="12" md="4" key={item.id}>
            <Card className='m-3'>
                <Card.Body>
                    <Card.Title>
                        <h2><strong>{item.title}</strong></h2>
                        <img className='image' src="../src/img/logo/svg/logoSVG1horizontal.svg" />
                    </Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <Card.Text>
                        <strong>R${item.valor}</strong>
                        <br></br>
                    </Card.Text>

                </Card.Body>
                <Button className='botao' variant="warning">Conectar</Button>
            </Card>
        </Col>
    );
}

function ListaFuncionalidades(props) {
    return (
        <Row>
            {props.funcionalidades.map(item => ItemFuncionalidade(item))}
        </Row>
    );
}

export default ListaFuncionalidades