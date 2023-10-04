import { styled } from "styled-components";

export const HeaderContainer = styled.div`
display: flex;
padding: 30px 40px 0;
justify-content: space-between;
align-items: center;
min-height: 30px;

@media (max-width: 576px){
  margin-bottom: 15px;
}
`

export const H1Header = styled.h1`
font-size: 2rem;
color: transparent;
background: linear-gradient(to right, rgb(36, 25, 56), #5984b6);
display: inline-block;
background-clip: text;
-webkit-background-clip: text;
margin-left: 40px;
`

const CustomText = styled.p`
  font-weight: ${props => props.fontWeight || 'normal'};
`

export const Bold = styled(CustomText)`
font-weight: 900;
font-size: 5rem;

@media (max-width: 576px){
  font-weight: 500;
  font-size: 4rem;
}
`

export const UlHeader = styled.ul`
display: flex;

@media(max-width: 900px){
  display: none;
}
`

export const AHeader = styled.a`
font-size: 2rem;
font-weight: 500;
padding: 10px 30px;
border-radius: 50px;
transition: 0.3s;
color: white;

&:hover{
  color: white;
  background-color: rgb(36, 25, 56);
}
`

export const Menu = styled.div`
display: none;
width: 60px;
height: 60px;
align-self: flex-end;
color: white;
margin-top: 15px;


@media(max-width: 900px){
  display: block;
}
`

export const LabelHeader = styled.label`
display: flex;
  flex-direction: column;
`

export const Hamburguer = styled.span`
background-color: white;
position: relative;
display: block;
width: 30px;
height: 2px;
top: 29px;
left: 15px;
transition: 0.5s ease-in-out;

&:before, &:after{
  background-color: white;
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: 0.2s ease-in-out;
}

&:before{
  top: -10px;
}

&:after{
  bottom: -10px;
}
`