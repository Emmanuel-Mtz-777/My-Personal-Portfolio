import "../../config/i18n";
import GlareHover from "../effects/GlareHover";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import {trackEvent} from "../../utils/analiticsTrackEvent.js";

export default function AboutMe() {
  const { t, i18n } = useTranslation();

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  const identityText = t("about.identity.text");
  const identityHighlights = t("about.identity.highlight", { returnObjects: true }) || [];

  const focusText = t("about.focus.text");
  const focusHighlights = t("about.focus.highlight", { returnObjects: true }) || [];

  const valuesText = t("about.values.text");
  const valuesHighlights = t("about.values.highlight", { returnObjects: true }) || [];

  const renderHighlightedText = (text, highlights) => {
    let highlightedText = text;

    if (!Array.isArray(highlights)) highlights = [];

    highlights.forEach((highlight) => {
      highlightedText = highlightedText.replace(
        new RegExp(`(${highlight})`, "gi"),
        '<span class="text-cyan-400 font-semibold">$1</span>'
      );
    });


    return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;

    
  };
  const getCVFile = () => {
      return i18n.language === "es"
        ? "/docs/Emmanuel_Martinez_Fullstack_Developer_cv.pdf"
        : "/docs/Emmanuel_Martinez_Fullstack_Developer_en_cv.pdf";
    };

  return (
    <section
      id="about"
      className="relative py-10 w-full flex flex-col items-center py-20"
    >
      <h2 className="text-2xl sm:text-4xl font-bold text-white mb-12 text-start">
        {t("about.title")}
      </h2>

      <div className="flex flex-col sm:flex-row max-w-[720px] gap-4 items-center">
        <div className="text-base sm:pl-6 px-4 text-white">
          {/* Siempre renderizamos el texto, con o sin JS */}
          <p>
            {renderHighlightedText(identityText, identityHighlights)}
            <br />
            <br />
            {renderHighlightedText(focusText, focusHighlights)}
            <br />
            <br />
            {renderHighlightedText(valuesText, valuesHighlights)}
          </p>

          <a
            href={getCVFile()}
            download
            onClick={() =>
              trackEvent("download_cv", {
                file_name: getCVFile().split("/").pop(),
                location: "about_section"
              })
            }
            className="text-white inline-block mt-4 bg-black/30 px-6 py-2 border border-white rounded-lg hover:bg-white/20 transition-colors duration-200"
          >
            Descargar CV
          </a>
        </div>

        
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >
            <img src="/img/Yo.avif" alt="Yo" className="w-80 h-auto sm:w-100" loading="lazy"/>
          </GlareHover>

      </div>
    </section>
  );
}
