import Header from "./components/Header";
import Section from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo"
import SectionThree from "./components/SectionThree"
import Footer from "./components/Footer"
import GlobalStyle from "./global/styles";


export default function App() {
  return (
    <>
     <Header/>
     <Section/>
     <SectionTwo/>
     <SectionThree/>
     <Footer/>
     <GlobalStyle/>
    </>
  );
}
