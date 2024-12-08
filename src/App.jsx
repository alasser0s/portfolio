// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import FAQ from './pages/FAQ';
import Support from './pages/Support';
import './App.css';
 
function App() {
  return (
    <div className="bg-[#19191B] min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
