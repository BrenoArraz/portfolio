import { styled } from "styled-components";

export const Sobree = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
color: white;

@media (max-width: 576px){
  margin-bottom: 20px;
}

@media (max-width: 470px){
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
`

export const DivDownloadCV = styled.div`
margin-top: 25px;
`

export const DownloadCV = styled.a`
font-size: 1.5rem;
font-weight: bold;
color: rgb(164, 196, 206);
background-color:rgb(29, 3, 46);
padding: 13px;
border-radius: 30px;
transition: 0.15s;

&:hover{
  background-color:#052a08;
}
`

export const BoxImgEu = styled.div`
max-width: 600px;
`
export const ImgEu = styled.img`
width: 100%;
`
export const SobreText = styled.div`
display: flex;
flex-direction: column;
margin-right: 100px;
width: 500px;
text-align: justify;


@media (max-width: 576px){
  margin-right: 15px;
}

@media (max-width: 470px){
  flex-direction: column;
  align-items: center;
 width: 95vw;
 
}
`

export const SobreTextSpan = styled.span`
font-weight: bold;
`

export const SobreH2 = styled.h2`
font-size: 4rem;
  margin-bottom: 15px;

  @media (max-width: 576px){
    font-size: 3rem;
  }
`

export const SobreP = styled.p`
font-size: 1.7rem;

@media (max-width: 576px){
  font-size: 1.3rem;
}
`