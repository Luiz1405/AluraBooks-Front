import Pesquisa from '../componentes/Pesquisa'
import styled from 'styled-components'

const AppContainer = styled.div`

    width: 100vw;
    min-height: 100vh;
    background-image: #EBEBEB

  li {
    list-style: none;
  }
`

function Favoritos() {
  return (
    <AppContainer>
      <Pesquisa/>
    </AppContainer>
  );
}

export default Favoritos;
