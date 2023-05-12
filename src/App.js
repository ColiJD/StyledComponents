import React, {useState} from "react";
import { temaClaro, temaOscuro } from "./assets/temas";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyled from "./assets/GlobalStyled";
import { BtnTema } from "./assets";
import SwitcherTema from "./Components/SwitcherTema";

function App() {
  const [tema, setTema] = useState(true);
  const toggleTema = () => {
    setTema((tema)=> !tema)
  }
  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
    <GlobalStyled/>
    <BtnTema onClick={toggleTema}>
      <SwitcherTema tema={tema}/>
    </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
