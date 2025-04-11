"use client";
import { useState } from "react";
import s from "./contact.module.css";
import { LuSendHorizontal } from "react-icons/lu";
import emailjs from "@emailjs/browser";
import { FaHourglassEnd } from "react-icons/fa";
import Swal from "sweetalert2";
const Contact_Form = () => {
  const [formulario, setFormulario] = useState({
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "service_m7yrlzh";
    const templateID = "template_7l1jl8m";
    const publicKey = "h81L5og6CxEzsfYpM";
    setTimeout(() => {
      emailjs.send(serviceID, templateID, formulario, publicKey).then(
        (result) => {
          console.log("Correo enviado:", result.text);
          setLoading(false);
          setFormulario({ email: "", message: "" });
          Swal.fire({
            icon: "success",
            title: "Mensaje enviado correctamente",
            text: "Nos pondremos en contacto contigo pronto.",
          });
        },
        (error) => {
          console.error("Error al enviar:", error.text);
          setLoading(false);
          Swal.fire({
            icon: "error",
            title: "Error al enviar el mensaje",
            text: "Por favor, intenta nuevamente más tarde.",
          });
        }
      );
    }, 3000); // Retraso de 3 segundos
  };

  return (
    <div className={s.container}>
      <h3 className={s.title}>
        Si te gustó mi porfolio no dudes en contactarte conmigo
      </h3>
      <div className={s.info_container}>
        <form className={s.form} onSubmit={handleSubmit}>
          <label>
            Correo:
            <input
              type="email"
              name="email"
              value={formulario.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Mensaje:
            <textarea
              name="message"
              value={formulario.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" disabled={loading}>
            {loading ? (
              <p className={s.button}>
                Enviando...
                <FaHourglassEnd size={20} className={s.spin} />
              </p>
            ) : (
              <p className={s.button}>
                Enviar
                <LuSendHorizontal size={20} />
              </p>
            )}
          </button>
        </form>
        <div className={s.info}>
          <h2>HOla</h2>
        </div>
      </div>
    </div>
  );
};

export default Contact_Form;
