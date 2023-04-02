import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./components/Components.css";
import Header from "./components/Header";
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
