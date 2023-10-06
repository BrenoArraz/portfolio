import React from "react";
import imgPokedex from '../images/imgPokedex.png'
import { BoxProjetos, ContatosProjeto, CssProjetos, GithubProjetos, H1Projetos, H3Projeto, HabilidadesUtilizadas, Hr, HtmlProjetos, InfoPokedex, InfoProjects, JSProjetos, PInfoPokedex, PInfoProjects, PProjeto, PokedexImg, Projeto, ProjetoEmConstrução, Projetoos, ReactProjetos, StyledcomponentsProjetos, UserGithubImg, Visit } from "./styled-projetos";
import { motion } from "framer-motion";
import { JS, Reac, Styledcomponents } from "../icons/react-icons";

const parentPokedex = {
  variantPokedexA: {scale: 1},
  variantPokedexB: { scale: 1.25 },
};

const childPokedex = {
  variantPokedexA: {opacity: 0},
  variantPokedexB: { opacity: 1 },
};

export const Projetos = () => {
  return (
    <BoxProjetos id="projetos">
    <H1Projetos>Projetos</H1Projetos>

    <Projetoos>
      
    <Projeto>
      <H3Projeto>Pokedex</H3Projeto>
      <PokedexImg  alt='pokedex' as={motion.div}
      variants={parentPokedex}
      initial='variantPokedexA'
      whileHover='variantPokedexB'
      >
        <InfoProjects as={motion.div}
        variants={childPokedex}
        initial='variantPokedexA'
        whileHover='variantPokedexB'>
          <PInfoProjects>Neste site, você encontrará uma coleção abrangente de  todas as espécies de Pokémon. Navegue através de um catálogo organizado e fácil de usar. Descubra informações essenciais, como o nome, tipo, habilidades e movimentos de cada Pokémon.  </PInfoProjects>
          <Hr></Hr>
          <HabilidadesUtilizadas>
            <JSProjetos />
            <ReactProjetos />
            <StyledcomponentsProjetos />
          </HabilidadesUtilizadas>
          </InfoProjects>
      </PokedexImg>
      <ContatosProjeto>
        <a href='https://github.com/BrenoArraz/pokedex' target="_blank" >
          <GithubProjetos alt='Visit repository'/>
        </a>
        <a href="https://pokedex-ba.vercel.app" target="_blank">
          <Visit />
          </a>
        </ContatosProjeto>
    </Projeto>

    <Projeto>
      <H3Projeto>User Github</H3Projeto>
      <UserGithubImg  alt='github' as={motion.div}
      variants={parentPokedex}
      initial='variantPokedexA'
      whileHover='variantPokedexB'
      >
        <InfoProjects as={motion.div}
        variants={childPokedex}
        initial='variantPokedexA'
        whileHover='variantPokedexB'>
          <PInfoProjects>O site é uma plataforma online que oferece uma interface de busca especializada para perfis do GitHub, onde os usuários podem pesquisar por perfis de outros desenvolvedores. Além da busca, o site pode oferecer recursos adicionais, como visualização de estatísticas dos perfis, exibição de repositórios e ultimos eventos.</PInfoProjects>
          <Hr></Hr>
          <HabilidadesUtilizadas>
            <HtmlProjetos />
            <CssProjetos />
            <JSProjetos />
          </HabilidadesUtilizadas>
          </InfoProjects>
      </UserGithubImg>
      <ContatosProjeto>
        <a href='https://github.com/BrenoArraz/user-github' target="_blank" >
          <GithubProjetos alt='Visit repository'/>
        </a>
        <a href="https://brenoarraz.github.io/user-github/" target="_blank">
          <Visit />
          </a>
        </ContatosProjeto>
    </Projeto>

    <ProjetoEmConstrução>
      <H3Projeto>Projeto 3</H3Projeto>
      <PProjeto>Em construção.</PProjeto>
    </ProjetoEmConstrução>

    </Projetoos>
  </BoxProjetos>
  )
}