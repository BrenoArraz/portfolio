import './App.css'
import { Header } from './components/header/header'
import { createGlobalStyle } from 'styled-components'
import { Sobre } from './components/sobre/sobre'
import { Habilidades } from './components/habilidades/habilidades'
import { Projetos } from './components/projetos/projetos'
import { Contato } from './components/contato/contato'

function App() {
  return (
    <body>
      <GlobalStyle />
      <Header />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contato />
    </body>
  )
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-decoration: none;
}

html{
  font-size: 62.5%;
  font-family: 'Playfair Display', serif;
}
`

export default App
