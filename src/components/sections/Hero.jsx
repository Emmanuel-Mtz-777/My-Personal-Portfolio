import "../../config/i18n";
import { useTranslation } from "react-i18next";
import Mail from "../icons/Mail";
import Linkedin from "../icons/Linkedin";
import GitHub from "../icons/Github";
import { trackEvent } from "../../utils/analiticsTrackEvent.js";
import "../../styles/Hero.css";

export default function Hero() {
  const { t, i18n } = useTranslation();

  const getCVFile = () => {
    return i18n.language === "es"
      ? "/docs/Emmanuel_Martinez_Fullstack_Developer_cv.pdf"
      : "/docs/Emmanuel_Martinez_Fullstack_Developer_en_cv.pdf";
  };

  return (
    <section
      id="home"
      className="relative min-h-dvh w-full flex items-center justify-center px-4 pt-20 sm:px-6 overflow-hidden "
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full max-w-6xl">
        <div className="flex flex-col text-left items-start gap-6 text-white max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-stone-400 lg:whitespace-nowrap">
            {t("hero.greeting")}
          </h1>

          <h2 className="text-2xl sm:text-4xl font-semibold text-white">
            {t("hero.role")}
          </h2>

          <div className="text-base sm:text-lg space-y-4">
            <p>{t("hero.description")}</p>

            <p className="text-sm opacity-80">{t("hero.location")}</p>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="https://github.com/Emmanuel-Mtz-777"
              target="_blank"
              rel="noopener noreferrer"
              className="flex p-2 border border-white rounded-xl px-4 items-center gap-2 hover:bg-white/20 hover:scale-110 transition-all duration-400"
            >
              <GitHub className="w-5 h-5" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/humberto-emmanuel-rosales-martinez-588002316/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex px-4 border border-white rounded-xl items-center gap-2 hover:bg-white/20 hover:scale-110 transition-all duration-400"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:hemmanuelmtz777@gmail.com"
              className="flex px-4 border border-white rounded-xl items-center gap-2 hover:bg-white/20 hover:scale-110 transition-all duration-400"
            >
              <Mail className="w-5 h-5" />
              <span>Gmail</span>
            </a>
          </div>

          <div className="flex pt-2 md:flex-wrap md:gap-6 justify-evenly md:justify-start w-full font-semibold">
            <a
              href={getCVFile()}
              download
              className="bg-white text-black px-6 py-3 rounded-xl transition-all duration-400 hover:bg-gray-800 hover:text-white hover:border hover:border-white hover:scale-110"
            >
              Descargar CV
            </a>

            <a
              href={getCVFile()}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-6 py-3 rounded-xl hover:bg-white/20 hover:scale-110 transition-all duration-400"
            >
              Ver CV
            </a>
          </div>
        </div>
        <div>
            <img
              src="/img/Yo.webp"
              alt="Yo"
              className="w-40 md:w-220 lg:w-80 rounded-2xl me"
              loading="lazy"
            />
        </div>
      </div>
    </section>
  );
}
