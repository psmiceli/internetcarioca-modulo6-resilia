import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import fpedro from '../img/pedro.png'
import fcaio from '../img/caio.png'
import fronald from '../img/ronald.png'
import fpablo from '../img/pablo.png'

const developers = [
  {
    name: 'Pedro Souza',
    imageUrl: fpedro ,
    github: 'https://github.com/themonsteer',
    linkedin: 'https://www.linkedin.com/in/pedro-souza-a382b3182/',
    width: '10px',
    height: '10px'
  },
  {
    name: 'Caio Pereira',
    imageUrl: fcaio,
    github: 'https://github.com/caaiopereira',
    linkedin: 'https://www.linkedin.com/in/caio-pereira-oliveira/',
  },
  {
    name: 'Ronald Luiz',
    imageUrl: fronald,
    github: 'https://github.com/Ronald-Luiz',
    linkedin: 'https://www.linkedin.com/in/ronald-luiz-9ab672200/',
  },
  {
    name: 'Pablo Miceli',
    imageUrl: fpablo,
    github: 'https://github.com/psmiceli',
    linkedin: 'https://www.linkedin.com/in/pablo-miceli-8bb155166/',
  },
];

const DeveloperCard = ({ developer }) => {
  return (
    <Card>
      <CardImg top src={developer.imageUrl} alt="Card image cap" width="284" height="284" />
      <CardBody>
        <CardTitle tag="h3">{developer.name} </CardTitle >
        <CardSubtitle tag="h6" className="mb-2 text-muted">Desenvolvedor</CardSubtitle>
        <a href={developer.github} color="primary">
  <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="Ícone do Github" width="35" height="35" />
</a>
{' '}
<a href={developer.linkedin} color="primary">
  <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="linkedin" width="35" height="35" />
</a>
       
      </CardBody>
    </Card>
  );
}

const DeveloperList = ({ developers }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {developers.map((developer, index) => (
        <div className="m-3" key={index}>
          <DeveloperCard developer={developer} />
        </div>
      ))}
    </div>
  );
}

const Squad = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-4">Nossa Equipe</h1>
      <DeveloperList developers={developers} />
    </div>
  );
}

export default Squad;
