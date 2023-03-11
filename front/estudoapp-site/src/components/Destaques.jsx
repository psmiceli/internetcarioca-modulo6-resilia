import {Row, Col, Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import destaque1 from '../img/planos.jpg'
import destaque2 from '../img/estudantes.jpg'
import destaque3 from '../img/internetcarioca.png'

function Destaques() {
    return (
        <Row className='mt-2'>
            <Col className='mt-2 colunaDestaque' sm="12" md="4">
                <Card className='cardDestaque'>
                    <Card.Img variant="top" src={destaque1} />
                    <Card.Body className='cardBody'>
                        <Card.Title>Conheça nossos planos:</Card.Title>
                        <Card.Text className='cardText'>
                        Temos planos para todo o tipo de família e para sua empresa, em todas as regiões da cidade. Conecte-se à revolução e dê adeus a falta de sinal. 
                        </Card.Text>
                        <LinkContainer to="/funcionalidades">
                            <Button variant="warning" className='botao-destaque'>Acesse agora</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card className='cardDestaque'>
                    <Card.Img variant="top" src={destaque2} />
                    <Card.Body className='cardBody'>
                        <Card.Title>Fortalecendo o acesso a educação:</Card.Title>
                        <Card.Text className='cardText'>
                            Você é professor ou representante de alguma empresa de educação, cultura ou terceiro setor? Entre em contato conosco para parcerias
                        </Card.Text>
                        <LinkContainer to="/contato">
                            <Button variant="warning" className='botao-destaque'>Seja parceiro</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card className='cardDestaque'>
                    <Card.Img variant="top" className='foto1' src={destaque3}/>
                    <Card.Body className='cardBody'>
                        <Card.Title>Conheça nossa empresa:</Card.Title>
                        <Card.Text className='cardText'>
                        A Internet Carioca é uma empresa privada que fornece planos de internet acessíveis e de alta qualidade em toda a cidade do Rio de Janeiro...
                        </Card.Text>
                        <LinkContainer to="/contato">
                        <Button variant="warning" className='botao-destaque'>Ver mais</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>                        
        </Row>
    );
}

export default Destaques;