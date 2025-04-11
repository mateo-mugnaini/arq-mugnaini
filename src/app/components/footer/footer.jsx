// ======= STYLES ======= \\
import Link from "next/link";
import s from "./footer.module.css";
// =======  ======= \\
const Footer = () => {
  return (
    <footer className={s.footer_container}>
      <span className={s.devWeb}>
        <Link
          target="_blank"
          title="Sitio Oficial"
          href={"https://www.linkedin.com/in/mateo-mugnaini"}
        >
          © Mateo Mugnaini
        </Link>
      </span>
      <span className={s.devWeb}>
        <p>Sitio NO oficial. Proyecto academico </p>
      </span>
      <span className={s.devWeb}>
        <p>Diseño web: </p>
        <Link
          title="LinkedIn"
          target="_blank"
          href={"https://www.linkedin.com/in/mateo-mugnaini"}
        >
          Mateo Mugnaini
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
