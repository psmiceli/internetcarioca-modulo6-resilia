import { useEffect, useState } from 'react'
import CmsApi from '../api/CmsApi'
import EquipeInterentCarioca from '../img/ilustracaoequipe.png';

function Sobre() {
    const [sobre, setSobre] = useState([])

    useEffect (() => {
        async function getSobre() {
            const response = await CmsApi().getSobre()
            const sobre = await response.json()
            setSobre(sobre.data)
        }

        getSobre()
    }, [])

    return (
    <div className='containerSobre'>
        <h2>CONHEÇA O INTERNET CARIOCA</h2>
        <p className='Texto'>{sobre.text}</p>
    </div>
    );
}

function ImgParaGrid6040() {
  return (
    <img className='imgEquipeInternetCarioca' src={EquipeInterentCarioca} alt="Satélite" />
  );
}

export { Sobre, ImgParaGrid6040 };