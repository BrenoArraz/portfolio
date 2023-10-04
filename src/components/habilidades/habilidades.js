import React, { useState } from 'react'
import { BoxHabilidades, H2Habilidades, H2TextHabilidades, Habilidadees, ImgItens, Itens, LiItens, PHabilidades, PHabilidades1, PHabilidades2, PItens, TextHabilidades, UlItens,  } from './styled-habilidades'
import { Css3, Git, Html5, JS, Jest, Mysql, Reac, Redux, Styledcomponents, Typescript } from '../icons/react-icons'


export const Habilidades = () => {

  const [descricao, setDescricao] = useState()

  

  return (
    <BoxHabilidades id='habilidades' >
      <Habilidadees>
        
          <H2Habilidades>Habilidades</H2Habilidades>
          <PHabilidades1>*Passe o mouse para ver a descrição.</PHabilidades1>
        
        <Itens>
        <UlItens>
          <LiItens onMouseEnter={() => {
            setDescricao('HTML5 (Linguagem de Marcação de HiperTexto, versão 5) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web.')
          }}>
            <PItens>HTML5</PItens>
            <Html5 />
          </LiItens>

          <LiItens onMouseEnter={() => {
            setDescricao('CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML.')
          }}>
            <PItens>CSS3</PItens>
            <Css3 />
          </LiItens>

          <LiItens onMouseEnter={() => {
            setDescricao('JavaScript é uma linguagem de script orientada a objetos e plataforma cruzada usada para tornar as páginas da Web interativas (por exemplo, com animações complexas, botões clicáveis, menus pop-up etc.).')
          }}>
            <PItens>JavaScript</PItens>
            <JS />
          </LiItens>

          <LiItens onMouseEnter={() => {
            setDescricao('O React é uma biblioteca JavaScript declarativa, eficiente e flexível para criar interfaces com o usuário. Ele permite compor UIs complexas a partir de pequenos e isolados códigos chamados “componentes”.')
          }}>
            <PItens>React.js</PItens>
            <Reac />
          </LiItens>

          <LiItens onMouseEnter={() => {
            setDescricao('O CSS-in-JS é uma técnica de escrever CSS dentro do JavaScript, em vez de um arquivo CSS externo. A ideia por trás dessa técnica é que ela permite que você crie estilos dinâmicos, com base em estados ou propriedades de componentes, sem precisar adicionar classes ou ids a eles.')
          }}>
            <PItens>Css-in-JS</PItens>
            <Styledcomponents />
          </LiItens>

          <LiItens onMouseEnter={() => {
            setDescricao('TypeScript é um superconjunto de JavaScript, ou seja, um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript, adicionando recursos que não estão presentes de maneira nativa na linguagem.')
          }}>
            <PItens>Typescript</PItens>
            <Typescript />
          </LiItens>

          <LiItens onMouseEnter={() => {
            setDescricao('Redux é uma biblioteca feita para gerenciar estados em uma aplicação, ela tira a responsabilidade de um componente ter um estado que poderá ser usado por vários outros componentes dentro da sua aplicação e passa isso para um objeto global, que pode ser acessado por qualquer componente, a qualquer momento.')
          }}>
            <PItens>Redux</PItens>
            <Redux />
          </LiItens>

          <LiItens onMouseEnter={() => {
            setDescricao('Git é um sistema de controle de versão distribuído, o que significa que um clone local do projeto é um repositório de controle de versão completo. Esses repositórios locais totalmente funcionais facilitam o trabalho offline ou remotamente.')
          }}>
            <PItens>Git</PItens>
            <Git />
          </LiItens>

          <LiItens onMouseEnter={() => {
            setDescricao('MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto apoiado pela Oracle e baseado em linguagem de consulta estruturada (SQL).')
          }}>
            <PItens>MySQL</PItens>
            <Mysql />
          </LiItens>

          <LiItens onMouseEnter={() => {
            setDescricao('Jest é um framework de teste unitário de código aberto, é uma das ferramentas de teste unitário mais difundidas dentro da comunidade de JavaScript.')
          }}>
            <PItens>Jest</PItens>
            <Jest />
          </LiItens>

        </UlItens>
        </Itens>
      </Habilidadees>
      <TextHabilidades>
        <H2TextHabilidades>DESCRIÇÃO</H2TextHabilidades>
        <PHabilidades2>{descricao}</PHabilidades2>
      </TextHabilidades>
    
    </BoxHabilidades>
  )
}

