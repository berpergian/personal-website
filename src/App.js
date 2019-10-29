import React, { useState, useEffect } from 'react';
import './css/App.css';
import Content from './component/Content';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {

  const backgroundUrl = "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80";
  const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  })

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundUrl})`}}>
      {/*<Header />*/}
      <Content />
      <Footer />
    </div>
  );
}

export default App;
