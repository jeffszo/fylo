import * as S from "./styles";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { AiTwotoneMail } from "react-icons/ai";
import Fylo from "../../images/logowhite.svg";

export default function Footer() {
  return (
    <>
      <S.ContainerGeral>
        <S.ContainerOne>
          <img src={Fylo} style={{marginBottom: 20}} />
          <S.ContainerSpan>
            <MdPhoneInTalk size={22} color={"white"} />
            <S.Span style={{ fontSize: 14 }}>Phone: +1-543-123-4567</S.Span>
          </S.ContainerSpan>
          <S.ContainerSpan style={{marginTop: 5}}>
            <AiTwotoneMail size={22} color={"white"} />
            <S.Span style={{ fontSize: 14 }}>example@fylo.com</S.Span>
          </S.ContainerSpan>
        </S.ContainerOne>
        <S.ContainerTwo>
          <S.Text>About Us</S.Text>
          <S.Text>Jobs</S.Text>
          <S.Text>Press</S.Text>
          <S.Text>Blog</S.Text>
        </S.ContainerTwo>
        <S.ContainerThree>
          <S.Text>Contact Us</S.Text>
          <S.Text>Terms</S.Text>
          <S.Text>Privacy</S.Text>
        </S.ContainerThree>
        <S.ContainerFour>
          <S.ContainerIcon>
            <FaFacebookF color="white" size="22" />
          </S.ContainerIcon>
          <S.ContainerIcon>
            <FaTwitter color="white" size="22" />
          </S.ContainerIcon>
          <S.ContainerIcon>
            <FaInstagram color="white" size="22" />
          </S.ContainerIcon>
        </S.ContainerFour>
      </S.ContainerGeral>
    </>
  );
}
