import { Header } from "../../components/header/Header"
import { Navbar } from "../../components/navbar/Navbar"
import * as Styled from "./Styled"

export const Home = () => {
  return (
    <Styled.Home>
      <Navbar />
      <Header />
    </Styled.Home>
  )
}
