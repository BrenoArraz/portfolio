import { styled } from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";
import { FaShareSquare } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiStyledcomponents } from "react-icons/si"



export const BoxProjetos = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 100px;
`

export const H1Projetos = styled.h1`
font-size: 4rem;
margin-bottom: 50px;
`

export const Projetoos = styled.ul`
width: 90vw;
display: grid;
grid-gap: 30px;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

export const Projeto = styled.li`
width: 100%
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
border-radius: 8px;
box-shadow: rgb(36, 25, 56) 0px 5px 15px;
`

export const H3Projeto = styled.h3`
font-size: 2rem;
margin-bottom: 10px;
color: #5984b6;
`

export const PProjeto = styled.p`
margin-top: 80px;
font-size: 2rem;
background: linear-gradient(to right, rgb(36, 25, 56), #5984b6);
width: 100%;
color: white;
text-align: center;
`

export const PokedexImg = styled.div`
width: 100%;
border-radius: 8px;
margin-bottom: 10px;
background-image: url(https://i.imgur.com/S3Ybq1f.png);
background-repeat: no-repeat;
background-size: cover;
`

export const UserGithubImg = styled.div`
width: 100%;
min-height: 200px;
border-radius: 8px;
margin-bottom: 10px;
background-image: url(https://i.imgur.com/zThUInM.png);
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`

export const InfoProjects = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
min-height: 190px;
color: black;
font-weight: bold;
text-align: justify;
position: relative;
z-index: 1;
background-repeat: no-repeat;
background-size: cover;
opacity: 1;
cursor: pointer;
border-radius: 8px;


&:after {
  content: '';
  background-color: rgb(44, 44, 44);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: .8;
  z-index: -1;
  border-radius: 8px;
`

export const PInfoProjects = styled.p`
padding: 20px;
text-align: justify;
height: 55%;
color: rgb(164, 196, 206);
font-size: 1.3rem;
`

export const Hr = styled.hr`
height: 1px;
background: rgb(164, 196, 206);
border: none;
width: 80%;
float: bottom; 
`

export const HabilidadesUtilizadas = styled.div`
display: flex;
gap: 10px;
margin-top: 10px;
`

export const HtmlProjetos = styled(SiHtml5)`
font-size: 2.5rem;
color: rgb(164, 196, 206);
`

export const CssProjetos = styled(SiCss3)`
font-size: 2.5rem;
color: rgb(164, 196, 206);
`

export const JSProjetos = styled(SiJavascript)`
font-size: 2.5rem;
color: rgb(164, 196, 206);
border-radius: 1px;
`

export const ReactProjetos = styled(SiReact)`
font-size: 2.5rem;
color: rgb(164, 196, 206);
`

export const StyledcomponentsProjetos = styled(SiStyledcomponents)`
font-size: 2.5rem;
color: rgb(164, 196, 206);
`

export const ProjetoEmConstrução = styled.li`
display: flex;
flex-direction: column;
align-items: center;
height: 200px;
background-color: rgb(29, 3, 46);
padding: 20px;
border-radius: 8px;
box-shadow: 4px 4px 4px #0f0119;
height: 89%;
`
export const GithubProjetos = styled(AiOutlineGithub)`
font-size: 2rem;
color: #5984b6;
border-radius: 10px;
background-color: rgb(39, 39, 39);
padding: 5px;
`

export const Visit = styled(FaShareSquare)`
font-size: 2rem;
color: #5984b6;
border-radius: 10px;
background-color: rgb(39, 39, 39);
padding: 5px 15px;
`

export const ContatosProjeto = styled.li`
display: flex;
justify-content: center;
font-size: 1rem;
gap: 5%;
`
