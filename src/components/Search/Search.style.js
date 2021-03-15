import styled from "styled-components";

export const SearchContainer = styled.div`
  color: #cccccc;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 120px;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const SearchButton = styled.button`
  width: 190px;
  height: 50px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background-color: #cc0000;
  border: 0;
  outline: none !important;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;
