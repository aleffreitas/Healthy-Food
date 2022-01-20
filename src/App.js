import { Footer } from "components/Footer";
import { Membership } from "components/Membership";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Reader } from "./components/Read";
import { Recipes } from "./components/Recipes";
import { Serve } from "./components/Serve";
import { GlobalStyle } from "./styles/global";

export function App() {

  

  return (
    <>
      
      <Header />
      <Main />
      <Recipes />
      <Serve />
      <Reader />
      <Membership />
      <Footer />

      <GlobalStyle />
    </>
  );
}