import styled from "styled-components";

interface ButtonProps {
  cor?: string;
  width?: string;
}

export const Btn = styled.button<ButtonProps>`
  cursor: pointer;
  width: ${(props) => 
    props.width ? props.width : "200px"};

  height: 45px;

  background-color: ${(props) =>
    props.cor ? props.cor : "hsl(224, 93%, 58%)"};
  border: none;


  border-radius: 3px;
`;

export const Text = styled.p`
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  text-align: center;
  color: #fff;
`;
