import Pesquisa from '../componentes/Pesquisa'
import UltimosLancamentos from '../componentes/UltimosLancamentos';
import styled from 'styled-components'

const AppContainer = styled.div`

    width: 100vw;
    min-height: 100vh;
    background-image: #EBEBEB

  li {
    list-style: none;
  }
`

function Home() {
  return (
    <AppContainer>
      <Pesquisa/>
      <UltimosLancamentos/>
    </AppContainer>
  );
}

export default Home;
