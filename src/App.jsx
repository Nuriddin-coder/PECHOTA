import { useState } from "react";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { CategoryMain } from "./components/categoryMain";
import { Tab } from "./components/tab";
import { Question } from "./components/question";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CategoryMain />
      <Tab />
      <Question />
      <Footer />
    </>
  );
}

export default App;
