import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero/Hero";
import Products from './components/Products/Products';
import { productDataTwo, productData } from './components/Navbar/data';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer'
import { useState } from 'react';
import { Modal } from './components/Modal/Modal';

function App() {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <Router>
      <GlobalStyle />
      <Modal showModal={showModal} setShowModal={setShowModal}/>
      <Hero openModal={openModal} />
      <Products heading='Escolha sua favorita salgada' data={productData}/>
      <Features />
      <Products heading='Escolha sua favorita doce' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
