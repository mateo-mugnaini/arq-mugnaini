import Image from "next/image";
import s from "./project.module.css";
import Link from "next/link";
const Project = ({ project }) => {
  console.log("🚀 ~ Project ~ project:", project);
  return (
    <Link className={s.container} href={`/projects/${project.id}`}>
      <div className={s.container}>
        <Image
          src={project.images[0] ? project.images[0] : ""}
          alt={project.name}
          width={0}
          height={0}
          className={s.image}
        />
        <hr className={s.blur} />
        <div className={s.text_container}>
          <h1>{project.name}</h1>
          <p>{project.resume}</p>
          <hr className={s.blur} />
        </div>
      </div>
    </Link>
  );
};

export default Project;
