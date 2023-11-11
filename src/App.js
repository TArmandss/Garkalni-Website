import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './components/HomePage/HomePage'
import GallerySection from './components/Gallery/GallarySection'
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    // Check if the current scroll position is not at the top
    if (window.scrollY !== 0) {
        // Scroll to the top of the page
        window.scrollTo(0, 0);
    }

})

  return (
    <div>
     <BrowserRouter>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="/gallery" element={<GallerySection />} /> 
    </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
