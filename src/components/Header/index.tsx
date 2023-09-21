import * as S from "./styles";
import Fylo from "../../images/logo.svg";

export default function Header() {
  return (
    <>
      <S.Header>
        <S.ContainerLogo>
          <img src={Fylo} style={{ height: 35 }} alt="Logo da Fylo" />
        </S.ContainerLogo>
        <S.Lista>
          <S.Item>Features</S.Item>
          <S.Item>Team</S.Item>
          <S.Item>Sign in</S.Item>
        </S.Lista>
      </S.Header>
    </>
  );
}
