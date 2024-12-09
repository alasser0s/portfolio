// App.jsx
import React from 'react';
import Navbar from './components/Header';// Adjust the import path as needed
import Footer from './components/Footer';
import Main from './components/Main';
import './App.css'; // Ensure this file includes the smooth scroll behavior
import Hero from './components/Hero';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="bg-[#19191B] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
       <HomePage/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
