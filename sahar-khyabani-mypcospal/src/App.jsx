import React from "react";
import "./App.scss";
import Header from "../src/components/Header/Header"; 
import Form from "../src/components/Form/Form";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Form />
      </main>
    </div>
  );
}

export default App;
