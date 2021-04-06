
import './App.css';
import React, {useState, useEffect } from "react";
import Cover from './components/cover/Cover';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Slider from './components/slider/Slider';
import Info from './components/info/Info';
import Footer from './components/footer/Footer';

function App() {

  const [scrollHeight, setScrollHeight] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight])

  const Nombre = "Andre Mogrovejo Martinez";

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} nombre={Nombre}/>
      <Cover nombre={Nombre}/>
      <About nombre={Nombre}/>
      <Slider nombre={Nombre}/>
      <Info nombre={Nombre}/>
      <Footer nombre={Nombre}/>
    </div>
  );
}

export default App;
