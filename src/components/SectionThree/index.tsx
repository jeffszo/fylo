import * as S from "./styles";
import {Btn, Text} from "../Button/styles"
import {InputEmail} from "../SectionOne/styles"
export default function SectionThree() {
  return (
    <>
      <S.ContainerEmail>
        <S.ContainerText>
          <S.Title>Get early access today</S.Title>
          <S.Desc>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </S.Desc>
        </S.ContainerText>
        <S.ContainerBtn>
            <InputEmail style={{
                width: 480,
                border: 'none'
            }} placeholder="email@example.com"/>
            <Btn style={{marginTop: 10}}>
                <Text>Get Started For Free</Text>
            </Btn>
        </S.ContainerBtn>
      </S.ContainerEmail>
    </>
  );
}
