import styled from "styled-components";
import { device } from "../../global/responsividade";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${device.mobileS}{
    margin: 35px 5px;
  }
  margin: 35px 50px;
  font-family: "Raleway", sans-serif;
`;

export const ContainerLogo = styled.div``;

export const Lista = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
`;

export const Item = styled.li`
  list-style-type: none;
  color: #000;
  margin: 0 0 0 45px;
  cursor: pointer;
  
`;
