// App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import './App.css';
import Hero from './components/Hero';
import HomePage from './pages/HomePage';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-[#0F0F1A] min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <HomePage/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
