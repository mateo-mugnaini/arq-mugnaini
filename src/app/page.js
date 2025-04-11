"use client";
import { useRef, useState } from "react";
import Navbar from "./components/presentation/navbar/navbar";
import Footer from "./components/footer/footer";
import LastProjects from "./components/lastProjects/lastProjects";
import Presentation from "./components/presentation/presentation";
import styles from "./page.module.css";
import AboutUs from "./components/aboutUs/aboutUs";
import WhatsApp_Button from "./components/whatsApp/whatsApp";
import Contact_Form from "./components/contact/contact";
import PopUp from "./components/popUP/popUp";

export default function Home() {
  const presentationRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [showPopUp, setShowPopUp] = useState(true);

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  // Función para la navegación de la navbar
  const handleNavigate = (section) => {
    switch (section) {
      case "home":
        scrollToSection(presentationRef);
        break;
      case "aboutUs":
        scrollToSection(aboutRef);
        break;
      case "projects":
        scrollToSection(projectsRef);
        break;
      case "contacto":
        scrollToSection(contactRef);
        break;
      // Agrega más casos según las secciones que tengas
      default:
        break;
    }
  };

  return (
    <div className={styles.page}>
      <Navbar onNavigate={handleNavigate} />
      <div ref={presentationRef}>
        <Presentation scrollToProjects={() => scrollToSection(aboutRef)} />
      </div>
      <div ref={aboutRef}>
        <AboutUs />
      </div>
      <div ref={projectsRef}>
        <LastProjects />
      </div>
      <div ref={contactRef}>
        <Contact_Form />
      </div>
      <Footer />
      <WhatsApp_Button />
      {showPopUp && <PopUp handleClosePopUp={handleClosePopUp} />}
    </div>
  );
}
