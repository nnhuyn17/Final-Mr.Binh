import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './component/Footer';
import Header from './component/Header';
import Homepage from './component/Page/Homepage';
import Login from './component/Page/Login';
import HomepageAd from './component/Page/Homepage_Admin/HomepageAd';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/homeAd' element={<HomepageAd/>} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
