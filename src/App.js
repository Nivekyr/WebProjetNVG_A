import './App.css';
import Navbar from './components/NavBar';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Devlog from "./components/Devlog";
import Wiki from "./components/Main/Wiki";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
            <Route path ="/" element={<Main/>} />
            <Route path="/Devlog" element={<Devlog/>} />
            <Route path="/Wiki" element={<Wiki/>} />
            <Route path="/Contact" element={<Contact/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
