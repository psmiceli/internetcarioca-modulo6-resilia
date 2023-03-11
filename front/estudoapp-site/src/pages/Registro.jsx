import Container from 'react-bootstrap/Container'
import Banners from '../components/Banners'
import Botaoconexao from '../components/Botaoconexao.jsx'
import Registrar from '../components/register'


function Registro() {
    return (
        <>
            <Container>
                <Banners />
                <Botaoconexao />
                <Registrar />
            </Container>
        </>
    );
}

export default Registro;