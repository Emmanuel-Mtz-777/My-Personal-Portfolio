import "../../config/i18n";
import { useTranslation } from "react-i18next";
import ProjectCard from "../ProjectCard";

const images = [
  "/img/Spotify-Insights.avif",
  "/img/Snackify.avif",
  "/img/C-Ita.avif",
  "/img/Meet2Go.avif"
];

export default function Projects() {
  const { t } = useTranslation();

  const projects = (t("projects.items", { returnObjects: true }) || []).map(
    (proj, index) => ({
      id: proj.id,
      title: proj.name,
      description: proj.description,
      github: proj.githubLink,
      repository: proj.repository,
      image: images[index] || null,
      imageAlt: proj.imageAlt || proj.name,
      tags: proj.technologies || [],
    })
  );

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full flex flex-col items-center pt-20"
    >
      <h2 className="text-2xl sm:text-4xl font-bold text-white mb-12 text-start">
        {t("projects.title")}
      </h2>

      <div className="w-full flex flex-col gap-10 items-center px-4">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}