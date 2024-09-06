import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AYEN, Home, TuneColors } from './Layouts/Sections';
import { AboutUs, Blog, Contact } from './Layouts/Pages';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          {/* Home */}
          <Route path='/' element={<Home />} />

          {/* Programs */}
          <Route path='/tunecolors' element={<TuneColors />} />
          <Route path='/ayen' element={<AYEN />} />

          {/* Blog */}
          <Route path='/blog' element={<Blog />} />

          {/* About Us */}
          <Route path='/about' element={<AboutUs />} />

          {/* Contact Us */}
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
