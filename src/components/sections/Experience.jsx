import "../../config/i18n";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

export default function Experience() {
  const { t } = useTranslation();
  const experiences = t("experience.items", { returnObjects: true }) || [];

  const [visible, setVisible] = useState([]);
  const [scrollDir, setScrollDir] = useState("down");
  const lastScrollY = useRef(0);
  const refs = useRef([]);

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!experiences.length || !hydrated) return;

    refs.current = refs.current.slice(0, experiences.length);

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
            setVisible((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          } else {
            setVisible((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [experiences, hydrated]);

  return (
    <section
      id="experience"
      className="relative w-full flex flex-col items-center pt-20 px-4"
    >
      <h2 className="text-2xl sm:text-4xl font-bold text-white mb-12 text-start">
        {t("experience.title")}
      </h2>

      <div className="w-full flex flex-col gap-6 items-center">
        {experiences.map((exp, index) => (
          <div
            key={index}
            ref={(el) => (refs.current[index] = el)}
            className={`p-4 max-w-[720px] w-full flex flex-col gap-2 px-4 sm:px-10 py-4 mb-10 rounded-3xl
                border border-gray-700
              transition-all duration-700 ease-out transform ${
                hydrated
                  ? visible.includes(index)
                    ? "opacity-100 translate-y-0"
                    : scrollDir === "down"
                    ? "opacity-0 translate-y-10"
                    : "opacity-0 -translate-y-10"
                  : "opacity-100 translate-y-0"
              }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              {exp.role}
            </h3>
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
            {exp.position}
            </h3>

            <p className="text-gray-100 text-lg font-medium">
            {exp.company}
            </p>

            <p className="text-gray-300 text-sm">
            {exp.duration}
            </p>

            <ul className="mt-4 list-disc pl-5 text-gray-300 space-y-2">
                {exp.description.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                    {item}
                    </li>
                ))}
            </ul>


          </div>
        ))}
      </div>
    </section>
  );
}
