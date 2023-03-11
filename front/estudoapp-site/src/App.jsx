import './assets/css/main.css'
import './assets/css/menuprincipal.css'
import './assets/css/bannerprincipal.css'
import './assets/css/grid6040.css'
import './assets/css/grid4060.css'
import './assets/css/animacaotxt1.css'
import './assets/css/destaques.css'


import Menu from './components/Menu'
import Rodape from './components/Rodape'
import Rotas from './routes/Rotas.jsx'


function App() {
    return (
        <div className="App">
            <Menu />
            <Rotas />
            <Rodape />
        </div>
    )
}

export default App