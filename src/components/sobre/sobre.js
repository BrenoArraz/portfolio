import React from 'react'
import euImg from '../images/euImg.png'
import { BoxImgEu, DivDownloadCV, DownloadCV, ImgEu, SobreH2, SobreP, SobreText, SobreTextSpan, Sobree } from './styled-sobre'
import CV from '../../Curriculo-breno-arraz-dev.pdf'

export const Sobre = () => {
  return (
    <Sobree>
      <BoxImgEu>
        <ImgEu src={euImg} alt='eu' />
      </BoxImgEu>
      <SobreText>
      <SobreH2>Sobre Mim</SobreH2>
      <SobreP>Olá! Sou Breno Arraz, um apaixonado desenvolvedor web com uma forte base técnica e um entusiasta criador de experiências digitais incríveis. Fui fascinado pelo potencial da web para transformar ideias em realidade. Durante minha jornada, aprimorei meu conhecimento em  <SobreTextSpan> JavaScript, HTML5, CSS3 </SobreTextSpan> e frameworks como <SobreTextSpan>React</SobreTextSpan> e futuramente <SobreTextSpan>Node.js</SobreTextSpan>.</SobreP>
      <DivDownloadCV>
      <DownloadCV href={CV} target="_blank" download='Curriculo-breno-arraz-dev' rel="noopener noreferrer">Download CV</DownloadCV>
      </DivDownloadCV>
      </SobreText>
    
    </Sobree>
  )
}
