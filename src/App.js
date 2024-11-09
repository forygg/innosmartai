import { useState } from 'react';
import './App.css';
import { Header, HeroSection, AboutSection, ServiceSection, ContactSection, Footer } from "./components";
import cross from "./assets/cross.svg"

function App() {
  const [isContactVisible, setContactVisible] = useState(false);
  const toggleContactSection = () => {
    setContactVisible(!isContactVisible);
  }

  return (
    <>
      {isContactVisible ? (
        <div className='contact-page'>
          <ContactSection />
          <img className="close-button" onClick={toggleContactSection} src={cross} alt='/'/>
        </div>
      ) : (
        <div className='appContainer'>
          <Header onContactClick={toggleContactSection} />
          <HeroSection />
          <AboutSection />
          <ServiceSection onContactClick={toggleContactSection} />
          <ContactSection />
          <Footer onContactClick={toggleContactSection} />
        </div>
      )}
      </>
  )
}

export default App;