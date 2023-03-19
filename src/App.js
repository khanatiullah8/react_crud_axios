import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './components/Components.css';
import Home from './components/Home';
import Read from './components/Read';
import Update from './components/Update';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route to='/' element={<Home />}>
            <Route index element={<Read />} />
            <Route path="/update" element={<Update />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
