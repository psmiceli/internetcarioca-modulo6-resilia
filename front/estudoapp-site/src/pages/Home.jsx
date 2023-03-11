import Container from 'react-bootstrap/Container'
import Destaques from '../components/Destaques'
import Depoimentos from '../components/Depoimentos'
import Banners from '../components/Banners'
import Botaoconexao from '../components/Botaoconexao.jsx'
import ApresentacaoHomeGrid4060 from '../components/Apresentacaohome 40-60.jsx'

function Home() {
    return (
        <>
            <Container>
                <Banners />
                <Botaoconexao />
                <ApresentacaoHomeGrid4060 />
                <Destaques />
                <Depoimentos />
            </Container>
        </>
    );
}

export default Home;