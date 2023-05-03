import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "./data.json";
import ProjectCard from "./ProjectCard";
import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";

export default function Projects() {
  const projects = data.projects;
  return (
    <div id="projects">
      <div className="py-10">
        <h1 className="display-medium secondary-text">Projects</h1>
        <div className="subline" />
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            image={
              project.image || "https://v1.tailwindcss.com/img/card-top.jpg"
            }
            description={project.content}
            title={project.title}
            icons={project.icons.map((icon) => (
              <FontAwesomeIcon
                icon={{ prefix: icon.key, iconName: icon.fa } as IconProp}
              />
            ))}
            features={project.techStack}
          />
        ))}
      </div>
    </div>
  );
}
