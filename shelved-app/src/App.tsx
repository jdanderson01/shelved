import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  const links = [
    { title: "Home", href: "/" },

    { title: "About", href: "/about" },

    { title: "Contact", href: "/contact" },
  ];

  return (
    <div>
      <Navbar links={links} brand={""} />
      <Header />
    </div>
  );
}

export default App;
