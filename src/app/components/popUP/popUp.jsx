import style from "./popUp.module.css";
import { IoClose } from "react-icons/io5";
const PopUp = ({ handleClosePopUp }) => {
  return (
    <div className={style.container}>
      <div className={style.text_container}>
        Esta página ha sido desarrollada íntegramente por Mateo Mugnaini. Todos
        los derechos sobre el diseño, estructura, contenido y funcionalidades
        pertenecen exclusivamente al autor. El diseño de la interfaz es original
        y ha sido realizado con fines didácticos y personales. Las imágenes
        utilizadas en esta plataforma son de carácter ilustrativo y no
        representan ningún tipo de afiliación comercial. Queda prohibida la
        reproducción total o parcial de cualquier elemento de este sitio sin
        autorización previa. Para consultas, comentarios o solicitudes, podés
        comunicarte a través del formulario de contacto disponible en la página
        o mediante mis redes sociales.
      </div>

      <div className={style.hr_container}>
        <hr className={style.hr} />
        <IoClose
          className={style.close_icon}
          size={30}
          onClick={handleClosePopUp}
        />
      </div>
    </div>
  );
};
export default PopUp;
