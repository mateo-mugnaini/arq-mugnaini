import Image from "next/image";
import s from "./presentation.module.css";
import { FaAngleDown } from "react-icons/fa";
import background from "../../../../public/projects/castañoHouse/castaño01.jpg";

const Presentation = ({ scrollToProjects }) => {
  return (
    <div className={s.container}>
      <div className={s.background_container}>
        <Image
          className={s.background}
          src={background}
          alt="background"
          width={3200}
          height={1800}
        />
      </div>
      <div className={s.title_container}>
        <div className={s.title_subcontainer}>
          <div className={s.title}>
            <h2>BARRIONUEVO / VILLANUEVA ARQ</h2>
          </div>
          <div className={s.subtitle}>
            <p>DISEÑO</p>
            <p>ARQUITECTURA</p>
            <p>CONSTRUCCIÓN</p>
          </div>
        </div>
        <div className={s.description_container}>
          <p className={s.description}>
            Somos Barrionuevo Villanueva ARQ, un estudio con más de años de
            trabajo. Para nosotros cada proyecto tiene que ser único y por eso
            creemos que el compromiso y la confianza con nuestros clientes es
            primero.
          </p>
        </div>
      </div>
      <div className={s.arrow_container}>
        <FaAngleDown onClick={scrollToProjects} className={s.arrow} size={40} />
      </div>
    </div>
  );
};

export default Presentation;
