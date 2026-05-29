import "../../config/i18n";
import { useTranslation } from "react-i18next";
import '../../styles/scroll.css'
import '../../styles/cards.css'


export default function Experience() {
  const { t } = useTranslation();
  const experiences = t("experience.items", {
  returnObjects: true,
  defaultValue: []
});

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
            className="card scrollCard"
          >
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