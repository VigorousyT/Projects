import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentApp from './components/ComponentApp';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Achievement from './components/Achievement/Achievement';
import Blog from './components/Blog';
import Contact from './components/Contact/Contact';
import Project from './components/Project/Project';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ComponentApp />} ></Route>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/achievement' element={<Achievement />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
