import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  background: ${(props) => props.theme.header};
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  flex-direction: row;
  height: 80px;
  font-size: 1.2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
`;

export const NavWrapper = styled.div`
  margin-right: 30px;
`;

export const NavLogo = styled.div`
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
`;
