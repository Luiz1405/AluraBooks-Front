import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg' 
import styled from 'styled-components';

function IconesHeader() {

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;

`

const Icones = styled.ul `
  display: flex;
  align-items: center;
  margin-left: auto;
  padding-right: 20px;
  list-style: none;
  
`

const icones = [perfil, sacola];

    return (
        <Icones>
          {icones.map( (icone) => (
            <Icone ><img src={icone}/></Icone>
          ))}
        </Icones>
    )
}

export default IconesHeader
