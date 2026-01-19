import "../../config/i18n";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
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

  const [visible, setVisible] = useState([]);
  const [scrollDir, setScrollDir] = useState("down");
  const lastScrollY = useRef(0);
  const refs = useRef([]);

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!projects.length || !hydrated) return;

    refs.current = refs.current.slice(0, projects.length);

    const onScroll = () => {
      if (window.scrollY > lastScrollY.current) setScrollDir("down");
      else setScrollDir("up");
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.current.indexOf(entry.target);
          if (index === -1) return;
          if (entry.isIntersecting) {
            setVisible((prev) => {
              if (!prev.includes(index)) return [...prev, index];
              return prev;
            });
          } else {
            setVisible((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      window.removeEventListener("scroll", onScroll);
      refs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, [projects, hydrated]);

  return (
    <section id="projects" className="relative min-h-screen w-full flex flex-col items-center pt-20">
      <h2 className="text-2xl sm:text-4xl font-bold text-white mb-12 text-start">
        {t("projects.title")}
      </h2>

      <div className="w-full flex flex-col gap-10 items-center px-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (refs.current[index] = el)}
            className={`transition-all duration-700 ease-out transform ${
              hydrated
                ? visible.includes(index)
                  ? "opacity-100 translate-y-0"
                  : scrollDir === "down"
                  ? "opacity-0 translate-y-10"
                  : "opacity-0 -translate-y-10"
                : "opacity-100 translate-y-0"
            }`}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
