import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Gallery from "./components/Gallery";
import Content from "./components/Content";
import Music from "./components/Music";
import Buttons from "./components/Buttons";

import ResponsePage from "./components/YesResponsePage";
import NoResponsePage from "./components/NoResponsePage";

function App() {
  const [responseMessage, setResponseMessage] = useState("");

  return (
    <>
      <Music />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="container">
                <Gallery />
                <Content />
                <Buttons setResponseMessage={setResponseMessage} />
              </div>
            }
          />
          <Route
            path="/respuesta"
            element={<ResponsePage responseMessage={responseMessage} />}
          />
          <Route
            path="/norespuesta"
            element={<NoResponsePage responseMessage={responseMessage} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
