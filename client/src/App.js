import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './Components/NavBar';

import Home from './Pages/Home';
import Products from './Pages/Products';
import About from './Pages/About';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
