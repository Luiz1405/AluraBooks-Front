import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Opcoes = styled.ul`
  display: flex;
`

const Opcao = styled.li`
  font-size: 16px;
  text-align: center;
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
`

function OpcoesHeader() {

    const textoOpcoes = [
    'CATEGORIAS',
    'FAVORITOS',
    'ESTANTE'
    ];
    return (
        <Opcoes>
          { textoOpcoes.map( (texto) => (
            <Link to={`/${texto.toLowerCase()}`}><Opcao><p>{texto}</p></Opcao></Link>
          ))}
        </Opcoes>
    )
}

export default OpcoesHeader