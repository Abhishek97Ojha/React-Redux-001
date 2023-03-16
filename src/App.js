import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Service from "./components/Service";
import Contact from "./components/Contact";
import { createContext, useState } from "react";
export const MyContext = createContext();
function App() {
  const [theme, setTheme] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const [display, setDisplay] = useState("none");
  return (
    <div className="App" style={theme}>
      <MyContext.Provider
        value={{ theme: theme, setTheme: setTheme, setDisplay: setDisplay }}
      >
        <Navbar />

        <div
          className="themeName"
          style={{ marginTop: "2rem", display: display }}
        >
          <h3>
            {theme.color === "#74eac2"
              ? "I have changed theme to Dark"
              : "I have changed theme to Light"}
          </h3>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </MyContext.Provider>
    </div>
  );
}

export default App;
