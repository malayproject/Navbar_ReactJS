import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Pages from "./components/Pages";

function App() {
  const [mobMode, setMobMode] = useState(false);
  const [showPages, setShowPages] = useState(false);

  useEffect(() => {
    const handleResize = (e) => {
      let screenWidth = e.target.innerWidth;
      // console.log(screenWidth);
      if (screenWidth < 1000) {
        setMobMode(true);
      } else {
        setMobMode(false);
        setShowPages(false);
      }
    };

    window.onresize = handleResize;
  }, []);

  const handleBurgerClick = (e) => {
    setShowPages((prev) => !prev);
  };
  // useEffect(() => {
  //   console.log(`mobMode useEffect called, mobMode: ${mobMode}`);
  // }, [mobMode]);

  return (
    <main className="main">
      <Navbar
        handleBurgerClick={handleBurgerClick}
        mobMode={mobMode}
        showPages={showPages}
      />
      {mobMode && <Pages mobMode={mobMode} showPages={showPages} />}
    </main>
  );
}

export default App;
