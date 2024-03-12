import * as Styled from "./Styled"
export const Navbar = () => {
  return (
    <Styled.Navbar className="navbar">
      <Styled.NavbarContainer>
        <span className="logo">VD logo</span>
        <Styled.NavItems>
          <Styled.NavBtn>Register</Styled.NavBtn>
          <Styled.NavBtn>Login</Styled.NavBtn>
        </Styled.NavItems>
      </Styled.NavbarContainer>
    </Styled.Navbar>
  )
}
