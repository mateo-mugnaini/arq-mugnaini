"use client";
import { useState, useEffect } from "react";
import s from "./navbar.module.css";
import Image from "next/image";
import Logo from "@/../public/logo/logo.png";

const Navbar = ({ onNavigate }) => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${s.navbar} ${showNavbar ? s.visible : ""}`}>
      <section>
        <Image className={s.logo} alt="logo" src={Logo} width={1} height={60} />
      </section>
      <section className={s.button_container}>
        <button className={s.button} onClick={() => onNavigate("home")}>
          Home
        </button>
        <button className={s.button} onClick={() => onNavigate("aboutUs")}>
          Nosotros
        </button>
        <button className={s.button} onClick={() => onNavigate("projects")}>
          Proyectos
        </button>
        <button className={s.button} onClick={() => onNavigate("prensa")}>
          Prensa
        </button>
        <button className={s.button} onClick={() => onNavigate("contacto")}>
          Contacto
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
