import styled from "styled-components";


export const ContainerGeral = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: hsl(243, 87%, 12%);
  width: 100%;
  height: 350px;
`;

export const ContainerOne = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  margin-left: -4%;
`;

export const ContainerSpan = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 110px;
`;

export const ContainerThree = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

export const ContainerFour = styled.div`
  display: flex;
  align-items: center;
  
`;

export const Text = styled.p`
  color: #fff;
  font-family: "Raleway", sans-serif;
  margin: 10px 0;
  opacity: 0.9;
  cursor: pointer;
  &:hover{
    color: hsl(238, 22%, 44%);
  }
`;

export const ContainerIcon = styled.div`
  border: 11px white;
  padding-right: 30px;
`;

export const Span = styled.span`
  color: #fff;
  font-family: "Open-Sans", sans-serif;
  opacity: 0.7;
  margin: 7px 15px;
`;
