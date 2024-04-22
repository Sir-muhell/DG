import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Contact from ".//Screens/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Projects from "./Screens/Projects";
import Privacy from "./Screens/Privacy";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <>
                    <Home />
                    <Footer />
                  </>
                </div>
              }
            />
            <Route
              path="/about"
              element={
                <div>
                  <>
                    <About />
                    <Footer />
                  </>
                </div>
              }
            />
            <Route
              path="/projects"
              element={
                <div>
                  <>
                    <Projects />
                    <Footer />
                  </>
                </div>
              }
            />
            <Route
              path="/contact"
              element={
                <div>
                  <>
                    <Contact />
                    <Footer />
                  </>
                </div>
              }
            />
            <Route
              path="/privacy"
              element={
                <div>
                  <>
                    <Privacy />
                    <Footer />
                  </>
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
