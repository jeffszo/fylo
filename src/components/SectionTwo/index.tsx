import { ContainerText, ContainerIlustrator } from "../SectionOne/styles";

import * as S from "./styles";
import ilustra from "../../images/illustration-2.svg";
import avatar from "../../images/avatar-testimonial.jpg";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function SectionTwo() {
  return (
    <>
      <S.ContainerGeral
        
      >
        <ContainerText>
          <S.Title>Stay productive, wherever you are</S.Title>
          <S.Desc>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all your file storage needs.
          </S.Desc>
          <S.Desc>
            Securely share files and folders with friends, family and collegues
            for live collaboration. No email attachments required!
          </S.Desc>

          <S.ContainerLink>
            <S.Link> See how Fylo works</S.Link>
            <BsFillArrowRightCircleFill color="#52b788" />
          </S.ContainerLink>

          <S.ContainerFrase>
            <S.Frase>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </S.Frase>
            <S.ContainerImg>
              <img
                src={avatar}
                alt=""
                style={{ borderRadius: 80, height: 40 }}
              />
              <ContainerText>
                <S.Span style={{ fontWeight: "bold", marginBottom: 1 }}>
                  Kyle Burton
                </S.Span>
                <S.Span>Founder & CEO, Huddle</S.Span>
              </ContainerText>
            </S.ContainerImg>
          </S.ContainerFrase>
        </ContainerText>
        <ContainerIlustrator>
          <img
            src={ilustra}
            style={{ height: 450 }}
            alt="Ilustração de pessoas apresentando projetos"
          />
        </ContainerIlustrator>
      </S.ContainerGeral>
    </>
  );
}
