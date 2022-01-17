import { Header } from "./components/Header";
import { Main } from "./components/Main";
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

      <GlobalStyle />
    </>
  );
}