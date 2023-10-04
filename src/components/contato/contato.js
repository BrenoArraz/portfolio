import React from 'react'
import { BoxContato, ContatoH1, Contatoo, Contatos, ContatosText } from './styled-contato'
import { Email, Github, Linkedin, Wpp } from '../icons/react-icons'


export const Contato = () => {
  return (
    <Contatoo id="contato">
      <ContatoH1>
        <h1>Contato</h1>
      </ContatoH1>
      <BoxContato>
        <Contatos>
          <a href="mailto:brenogomesarraz@gmail.com" target="_blank">
            <Email />
            <ContatosText>Email</ContatosText>
            <ContatosText>brenogomesarraz@gmail.com</ContatosText>
          </a>
        </Contatos>

        <Contatos>
        <a href='https://api.whatsapp.com/send?phone=5527999069565'  target="_blank">
          <Wpp />
          <ContatosText>Whatsapp</ContatosText>
          <ContatosText>+55 (27)99906-9565</ContatosText>
        </a>
        </Contatos>

        <Contatos>
        <a href='https://www.linkedin.com/in/breno-arraz-6913aa23a/' target="_blank">
          <Linkedin />
          <ContatosText>Linkedin</ContatosText>
          <ContatosText>@brenoarraz</ContatosText>
        </a>
        </Contatos>

        <Contatos>
        <a href='https://github.com/BrenoArraz' target="_blank">
          <Github />
          <ContatosText>Github</ContatosText>
          <ContatosText>@brenoarraz</ContatosText>
        </a>
        </Contatos>
      </BoxContato>
    </Contatoo>
  )
}
