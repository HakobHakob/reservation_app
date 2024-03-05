import { Header } from "../../components/header/Header"
import { Navbar } from "../../components/navbar/Navbar"
import * as Styled from "./Styled"

export const List = () => {
  return (
    <Styled.List>
      <Navbar />
      <Header type = "list"/>
    </Styled.List>
  )
}
