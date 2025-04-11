import s from "./lastProjects.module.css";
import projects from "@/app/utils/projects.json";
import Project from "./project/project";
import Link from "next/link";

const LastProjects = () => {
  return (
    <div className={s.container}>
      <div className={s.title_container}>
        <h1 className={s.title}>ÚLTIMOS PROYECTOS</h1>
        <Link className={s.link} href={"/proyectos"}>
          Ver mas proyectos
        </Link>
      </div>
      <div className={s.projects_container}>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default LastProjects;
