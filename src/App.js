import { Footer } from "components/Footer";
import { Membership } from "components/Membership";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Reader } from "./components/Read";
import { Recipes } from "./components/Recipes";
import { Serve } from "./components/Serve";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from 'react-toastify';
import { useState } from "react";
import { NewRegisterModal } from "components/NewRegisterModal";

export function App() {

  const [isNewModalOpen, setIsNewModalOpen] = useState(false);

  function handleModalOpen() {
    setIsNewModalOpen(true);
  }

  function handleCloseModalOpen() {
    setIsNewModalOpen(false);
  }

  return (
    <>
      <NewRegisterModal isOpen={isNewModalOpen} onRequestClose={handleCloseModalOpen}/>

      <Header openNewModal={handleModalOpen} />
      <Main />
      <Recipes />
      <Serve />
      <Reader />
      <Membership />
      <Footer />
      <ToastContainer />
      <GlobalStyle />
    </>
  );
}