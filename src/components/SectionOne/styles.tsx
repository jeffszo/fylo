import styled from "styled-components";
import { device } from "../../global/responsividade";

export const ContainerGeral = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${device.mobileS} {
    flex-direction: column-reverse;
  }

  margin: 0 0 250px 50px;
  align-items: center;
  font-family: "Open Sans", sans-serif;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.mobileS} {
    align-items: center;
    justify-content: center;

  }
`;

export const Title = styled.h1`
  font-weight: 700;
  width: 500px;
  line-height: 1.5;
  margin: 0 0 5px 0;

  @media ${device.mobileS} {
    text-align: center;
    margin: 10px 0;
  }
`;

export const Desc = styled.p`
  width: 580px;
  font-size: 18px;
  line-height: 1.5;
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  @media ${device.mobileS} {
    flex-direction: column;
    justify-content: center;

  }

`;

export const InputEmail = styled.input`
  height: 45px;
  width: 350px;
  border: 1px solid black;
  border-radius: 2px;
  padding-left: 25px;
  margin: 0 15px 0 0;
  font-family: "Raleway", sans-serif;

  @media ${device.mobileS} {
    margin: 20px 0;
    width: 300px;
    
  }
`;

export const ContainerIlustrator = styled.div`

`;
