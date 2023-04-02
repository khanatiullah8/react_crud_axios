import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import "./components/Components.css";
import Header from "./components/Header";
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
