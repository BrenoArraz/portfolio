import React from "react"
import './header.css'
import { AHeader, Bold, H1Header, Hamburguer, HeaderContainer, LabelHeader, Menu, UlHeader } from "./styled-header"

export const Header = () => {
  return (
    <header className="header">
    <HeaderContainer>

      <H1Header><Bold>Breno Arraz</Bold></H1Header>

      <nav>

        {/* Clicar fora pra sair do hamburguer, clicar uma opção fechar o hamburguer */}
      <input type="checkbox" id="menu-hamburguer" />
          <LabelHeader for="menu-hamburguer">
            <Menu>
              <Hamburguer></Hamburguer>
            </Menu>
          </LabelHeader>

          <UlHeader>
            <li><AHeader href="#sobre">Sobre</AHeader></li>
            <li><AHeader href="#habilidades">Habilidades</AHeader></li>
            <li><AHeader href="#projetos">Projetos</AHeader></li>
            <li><AHeader href="#contato">Contato</AHeader></li>
          </UlHeader>
        </nav>
    </HeaderContainer>
  </header>
  )
}