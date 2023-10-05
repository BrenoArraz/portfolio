import { styled } from "styled-components";

export const BoxHabilidades = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 576px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // margin-left: 60px;
  }
`


export const Habilidadees = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 500px;
`

export const H2Habilidades = styled.h2`
font-size: 4rem;
margin-top: 25px;
margin-bottom: 10px;

@media (max-width: 576px){
  font-size: 2rem;
}
`

export const PHabilidades1 = styled.p`
font-size: 1.2rem;
padding-right: 250px;
`

export const Itens = styled.div`
margin-top: 30px;
`

export const UlItens = styled.ul`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-gap: 30px;

@media (max-width: 500px){
  grid-template-columns: repeat(4, 1fr);
}
`

export const LiItens = styled.li`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;

&:hover{
  cursor: pointer;
}

`

export const ImgItens = styled.img`
width: 100%;
`

export const PItens = styled.p`
font-size: 1.5rem;
`

export const TextHabilidades = styled.div`
width: 500px;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 4px 4px 4px #131212;
margin-top: 30px;

@media (max-width: 500px){
  width: 95vw;
}
`

export const H2TextHabilidades = styled.h2`
margin-top: 10px;
margin-bottom: 20px;
font-size: 3rem;

@media (max-width: 576px){
  font-size: 2rem;
}
`

export const PHabilidades2 = styled.p`
margin-top: 50px;
text-align: center;
font-size: 1.5rem;

@media (max-width: 576px){
  padding-bottom: 15px
}
`