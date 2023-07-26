import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import NumberView from "./components/NumberView";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Button type="+" />
      <NumberView />
      <Button type="-" />
    </div>
  );
}

export default App;
