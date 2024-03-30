import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import "./styles.css"; // Make sure you have this CSS file

function App() {
  return (
    <div>
      <Header />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
