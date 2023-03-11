import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Rodape() {
    return (
        <footer className="rodape mt-5 border-top border-dark border-2">
            <Container className='text-center py-3'>
                <p>EstudoApp &copy; 2021</p>
                <Link to="/login" className="btn btn-primary">Dashboard</Link>
            </Container>
        </footer>
    );
}

export default Rodape