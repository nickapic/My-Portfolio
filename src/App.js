import React from "react";
import "./App.css";
import Header from "./components/header.component";
import HomePage from "./pages/home/home.component";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
