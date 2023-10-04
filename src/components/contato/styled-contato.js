import { styled } from "styled-components";

export const Contatoo = styled.section`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 100px;
`

export const ContatoH1 = styled.h1`
font-size: 4rem;

@media (max-width: 576px){
  font-size: 3rem;
}
`

export const BoxContato = styled.ul`
display: flex;
justify-content: space-around;
align-items: center;
gap: 80px;
margin-top: 80px;
flex-wrap: wrap;

@media (max-width: 576px){
  gap: 40px;
}
`

export const Contatos = styled.li`
text-align: center;
color: white;
`
export const ContatosText = styled.p`
color: white;
font-size: 1.5rem;

`