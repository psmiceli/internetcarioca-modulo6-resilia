import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import foto from '../img/l.png'
import foto2 from '../img/dudu.png'
import foto3 from '../img/boona.png'

function Depoimentos() {
    return (
        <>
        <h2 className='mt-3'>Depoimentos</h2>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                <img src={foto}  alt="Foto do depoimento" className='rounded' />
            </Col>
            <Col sm="12" md="10">
                <strong>Luís Henrique</strong>
                <p>
                    "o Internet Carioca revolucionou minha vida, eu não tinha acesso a internet de QUALIDADE, e agora alem de conseguir usar na rua de graça, também consegui botar em casa pois
                     o valor é acessivel, agora só falta comprar um monitor."
                </p>
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                <img src={foto2}  alt="Foto do depoimento" className='rounded' />
            </Col>
            <Col sm="12" md="10">
                <strong>Eduardo Paes</strong>
                <p>
                "É encorajador ver que essa iniciativa que eu, em conjunto com os DEVS da Resilia, Senac e a STARLINK criamos está disponível tanto para as áreas urbanas quanto para
                 as favelas do Rio De Janeiro, garantindo que todos os cidadãos tenham acesso a esse recurso fundamental. Só tenho a agradecer por essa iniciativa colaborativa que
                  está ajudando a tornar o Rio de Janeiro uma cidade mais conectada e inclusiva do mundo."
                </p>
            </Col>
        </Row>        
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                <img src={foto3}  alt="Foto do depoimento" className='rounded' />
            </Col>
            <Col sm="12" md="10">
                <strong>Bruna Dias</strong>
                <p>
                "Gostaria de expressar minha gratidão pela iniciativa da Prefeitura do Rio de Janeiro, da empresa Starlink e da InternetCarioca em fornecer conexão à internet em toda a
                 cidade. Essa parceria é um grande passo para democratizar o acesso à informação e à educação, especialmente em regiões que historicamente enfrentam desafios para obter
                  uma conexão de qualidade."
                </p>
            </Col>
        </Row>        
        </>
    )
}

export default Depoimentos