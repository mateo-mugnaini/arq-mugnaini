"use client";
import { FaCrop, FaHelmetSafety } from "react-icons/fa6";
import { FaPencilRuler, FaAngleDown } from "react-icons/fa";
import s from "./aboutUs.module.css";
import { useState } from "react";
import Image from "next/image";
import background from "@/../public/projects/casaVizaron/02.png";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleOpenMenu = (menu) => {
    setActiveTab((prev) => (prev === menu ? "" : menu));
  };

  return (
    <div className={s.container}>
      <div className={s.background_container}>
        <Image
          className={s.background}
          src={background}
          alt="background"
          width={761}
          height={729.5}
        />
      </div>
      <section className={s.title_container}>
        <div className={s.title}>
          <h2>EL ESTUDIO</h2>
          <hr className={s.hr} />
        </div>
        <p className={s.description}>
          Somos Barrionuevo Villanueva ARQ, un estudio con más de 10 años de
          trabajo. Para nosotros cada proyecto tiene que ser único y por eso
          creemos que el compromiso y la confianza con nuestros clientes es lo
          primero.
        </p>
        <div className={s.icons_container}>
          <div title="Diseño" className={s.icon}>
            <FaPencilRuler size={30} />
          </div>
          <div title="Arquitectura" className={s.icon}>
            <FaCrop size={30} />
          </div>
          <div title="Construcción" className={s.icon}>
            <FaHelmetSafety size={30} />
          </div>
        </div>
      </section>
      <section className={s.lists_container}>
        <section className={s.practice_container}>
          <button
            className={`${s.button} ${
              activeTab === "practicos" ? s.activeButton : ""
            }`}
            onClick={() => handleOpenMenu("practicos")}
          >
            PRÁCTICOS
            <FaAngleDown
              className={`${s.svg} ${
                activeTab === "practicos" ? s.rotate : ""
              }`}
            />
          </button>
          <div
            className={`${s.text} ${activeTab === "practicos" ? s.active : ""}`}
          >
            <p>
              ◉ En Barrionuevo Villanueva ARQ, entendemos la importancia de la
              funcionalidad y la eficiencia en el diseño arquitectónico.
              Buscamos soluciones prácticas y creativas que optimicen el uso del
              espacio, los recursos y el presupuesto.
            </p>
            <p>
              ◉ Nos enfocamos en crear proyectos que sean sostenibles y
              respetuosos con el medio ambiente. Incorporamos principios de
              diseño bioclimático y utilizamos materiales eco-amigables para
              minimizar el impacto ambiental de nuestras construcciones.
            </p>
            <p>
              ◉ Nos adaptamos a las necesidades y preferencias de cada cliente,
              ofreciendo soluciones personalizadas que se ajusten a su estilo de
              vida y presupuesto. Nos esforzamos por hacer que el proceso de
              diseño y construcción sea lo más sencillo y eficiente posible.
            </p>
          </div>
        </section>

        <section className={s.pasion_container}>
          <button
            className={`${s.button} ${
              activeTab === "pasion" ? s.activeButton : ""
            }`}
            onClick={() => handleOpenMenu("pasion")}
          >
            PASIÓN
            <FaAngleDown
              className={`${s.svg} ${activeTab === "pasion" ? s.rotate : ""}`}
            />
          </button>
          <div
            className={`${s.text} ${activeTab === "pasion" ? s.active : ""}`}
          >
            <p>
              ◉ En Barrionuevo Villanueva ARQ, la arquitectura es nuestra
              pasión. Nos impulsa la creatividad, la innovación y el deseo de
              transformar espacios en experiencias únicas. Cada proyecto es un
              desafío emocionante que abordamos con entusiasmo y dedicación.
            </p>
            <p>
              ◉ Nos apasiona trabajar en estrecha colaboración con nuestros
              clientes, comprendiendo sus necesidades y aspiraciones para crear
              proyectos que reflejen su personalidad y estilo de vida. Buscamos
              superar los límites de la arquitectura convencional y crear
              espacios que inspiren y emocionen.
            </p>
            <p>
              ◉ Creemos que la arquitectura tiene el poder de mejorar la calidad
              de vida de las personas. Nos apasiona diseñar espacios que
              fomenten el bienestar, la armonía y la conexión con el entorno.
            </p>
          </div>
        </section>

        <section className={s.profesional_container}>
          <button
            className={`${s.button} ${
              activeTab === "profesional" ? s.activeButton : ""
            }`}
            onClick={() => handleOpenMenu("profesional")}
          >
            PROFESIONALISMO
            <FaAngleDown
              className={`${s.svg} ${
                activeTab === "profesional" ? s.rotate : ""
              }`}
            />
          </button>
          <div
            className={`${s.text} ${
              activeTab === "profesional" ? s.active : ""
            }`}
          >
            <p>
              ◉ En Barrionuevo Villanueva ARQ, el profesionalismo es la base de
              cada proyecto. Con más de 10 años de experiencia, nos
              comprometemos a ofrecer soluciones arquitectónicas de alta
              calidad, cumpliendo con los más altos estándares y superando las
              expectativas de nuestros clientes.
            </p>
            <p>
              ◉ Nuestro equipo de arquitectos y diseñadores está formado por
              profesionales altamente capacitados, dedicados a brindar un
              servicio excepcional en cada etapa del proyecto. La precisión, la
              atención al detalle y la excelencia técnica son nuestras señas de
              identidad.
            </p>
            <p>
              ◉ Creemos en la importancia de la comunicación clara y
              transparente con nuestros clientes. Nos esforzamos por construir
              relaciones de confianza, basadas en la honestidad, la integridad y
              el respeto mutuo.
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default AboutUs;
