import Container from 'react-bootstrap/Container'
import Banners from '../components/Banners'
import Botaoconexao from '../components/Botaoconexao.jsx'
import ApresentacaoSobreGrid6040 from '../components/ApresentacaoSobre 60-40.jsx'

function Home() {
    return (
        <>
            <Container>
                <Banners />
                <Botaoconexao />
                <ApresentacaoSobreGrid6040 />
            </Container>
        </>
    );
}

export default Home;