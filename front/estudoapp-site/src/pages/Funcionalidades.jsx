import ListaFuncionalidades from "../components/ListaFuncionalidades"
import Container from 'react-bootstrap/Container'

import Formulario from '../components/Form'

import Banners from '../components/Banners'
import Botaoconexao from '../components/Botaoconexao.jsx'

import { useEffect, useState } from "react"
import CmsApi from '../api/CmsApi'


function Funcionalidades() {
    const [funcionalidades, setFuncionalidades] = useState([])
    const [nomePlano, setNomePlano] = useState("");

    async function fetchFuncionalidades() {
        const response = await CmsApi().getFuncionalidades()
        if (!response.ok) {
            alert('Erro ao carregar funcionalidades')
            return
        }
        const funcionalidades = await response.json()
        setFuncionalidades(funcionalidades.data)
    }

    async function buscarPlano(event) {
        event.preventDefault();
        const response = await CmsApi().buscarPlanoPorNome(nomePlano);


        if (nomePlano === ""){
            alert("Digite por favor!");
            return;
        }


        else if (!response.ok) {
            alert("Plano não encontrado!");
            return;
        }

        const planos = await response.json();
        alert(`Plano encontrado: ${planos.description}`);
        history.push('/funcionalidades');
        // setFuncionalidades(planos.data);
       
    }

    useEffect(() => {
        fetchFuncionalidades()
    }, [])

    return (
        <>
            <Container className="conteudo-margin">
                <Banners />
                <Botaoconexao />
                <Formulario
                    label="Buscar plano"
                    value={nomePlano}
                    onChange={e => setNomePlano(e.target.value)}
                    onSubmit={buscarPlano}
                />

                <h1>Planos</h1>
                <ListaFuncionalidades funcionalidades={funcionalidades} />
            </Container>
        </>
    );
}

export default Funcionalidades
