import { useState } from "react";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { CategoryMain } from "./components/categoryMain";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <CategoryMain />
    </>
  );
}

export default App;
