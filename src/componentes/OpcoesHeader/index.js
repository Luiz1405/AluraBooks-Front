import styled from 'styled-components';

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
    'MINHA ESTANTE'
    ];
    return (
        <Opcoes>
          { textoOpcoes.map( (texto) => (
            <Opcao><p>{texto}</p></Opcao>
          ))}
        </Opcoes>
    )
}

export default OpcoesHeader