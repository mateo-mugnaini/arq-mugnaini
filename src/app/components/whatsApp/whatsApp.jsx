import Link from "next/link";
import s from "./whatsApp.module.css";
import { FaWhatsapp } from "react-icons/fa";
const WhatsApp_Button = () => {
  return (
    <Link
      target="_blank"
      href={"https://wa.me/+5493516578234"}
      className={s.container}
    >
      <FaWhatsapp size={30} />
    </Link>
  );
};
export default WhatsApp_Button;
