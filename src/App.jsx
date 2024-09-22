import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Weather from "./pages/weather/Weather";

function App() {
  return (
    <main>
      <Navbar />
      <Weather />
    </main>
  );
}

export default App;
