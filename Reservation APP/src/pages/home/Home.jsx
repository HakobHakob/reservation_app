import { Featured } from "../../components/featured/Featured"
import { FeaturedProperties } from "../../components/featured/featuredProperties/FeaturedProperties"
import { Header } from "../../components/header/Header"
import { Navbar } from "../../components/navbar/Navbar"
import { PropertyList } from "../../components/propertyList/PropertyList"
import * as Styled from "./Styled"

export const Home = () => {
  return (
    <Styled.Home>
      <Navbar />
      <Header />
      <Styled.HomeContainer>
        <Featured />
        <Styled.HomeTitle>Browse by property type</Styled.HomeTitle>
        <PropertyList/>
        <Styled.HomeTitle>Homes guests love</Styled.HomeTitle>
        <FeaturedProperties/>
      </Styled.HomeContainer>
    </Styled.Home>
  )
}
