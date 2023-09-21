import * as S from "./styles";
import { Button } from "../Button";
import Ilustra from "../../images/illustration-1.svg"

export default function SectionOne() {
  return (
    <S.ContainerGeral>
      <S.ContainerText>
        <S.Title>
          All your files in one secure location, accessible anywhere.
        </S.Title>
        <S.Desc>
          Fylo stores your most importante files in one secure location. Acess
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </S.Desc>
        <S.ContainerButton>
          <S.InputEmail 
            placeholder="Enter your email..."
          />
          <Button />
        </S.ContainerButton>
      </S.ContainerText>

      <S.ContainerIlustrator>
        <img style={{height: 470, width: 650}} src={Ilustra} alt="" />
      </S.ContainerIlustrator>
    </S.ContainerGeral>
  );
}
