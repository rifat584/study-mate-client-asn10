import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import MainContainer from "../Containers/MainContainer";

const MainLayout = () => {
  return (
    <MainContainer>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </MainContainer>
  );
};

export default MainLayout;
