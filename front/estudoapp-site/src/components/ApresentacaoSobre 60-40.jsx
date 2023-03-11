import { Sobre, ImgParaGrid6040 } from './Sobreinternetcarioca.jsx';

function ApresentacaoHomeGrid6040() {
    return (
        <div className="grid6040-container">
          <div className="grid6040-item txt6040">
              <Sobre />
          </div>
          <div className="grid6040-item img6040">
              <ImgParaGrid6040 />
          </div>
        </div>
    );
}

export default ApresentacaoHomeGrid6040;