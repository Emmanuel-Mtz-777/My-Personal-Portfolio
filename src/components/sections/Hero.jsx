import "../../config/i18n";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import SplitText from "../effects/SplitText";
import AnimatedContent from "../effects/AnimatedContent";
import Mail from "../icons/Mail";
import Linkedin from "../icons/Linkedin";
import GitHub from "../icons/Github";

export default function Hero() {
    const { t, i18n } = useTranslation();
    const [key, setKey] = useState(0);
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        setHydrated(true);
    }, []);


    return (
        <section id="home" className="relative min-h-[100dvh] w-full flex items-center justify-center px-4 pt-20 sm:px-6 overflow-hidden">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl w-full ">

            <SplitText
            key={`greeting-${key}`}
            text={t("hero.greeting")}
            className="text-2xl sm:text-3xl md:text-5xl font-semibold text-stone-400"
            delay={60}
            duration={0.4}
            splitType="chars"
            from={hydrated ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
            to={{ opacity: 1, y: 0 }}
            tag="h1"
            />

            <div className="h-10 sm:h-12">
        
                <SplitText
                key={`role-${key}`}
                text={t("hero.role")}
                className="text-2xl sm:text-4xl  font-semibold text-white"
                delay={50}
                duration={0.2}
                splitType="chars"
                from={hydrated ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
                to={{ opacity: 1, y: 0 }}
                tag="h2"
                />
            </div>
            <div
                className={
                    "text-white space-y-3 max-w-2xl transition-all duration-700 ease-out text-start opacity-100 translate-y-0"
                }
            >
                <AnimatedContent active={hydrated}>
                    <p className="text-base sm:text-lg">
                    {t("hero.description")}
                    </p>

                    <p className="text-base sm:text-lg">
                        {t("hero.completeDescription")}
                    </p>

                    <p className="text-sm opacity-80 mt-4">
                        {t("hero.location")}
                    </p>
                </AnimatedContent >
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6 w-full">

                    <div className="flex flex-row gap-6 justify-center ">
                        <AnimatedContent>
                            <div className="flex w-full gap-4 sm:gap-6 justify-center">
                                <a href="https://github.com/Emmanuel-Mtz-777" target="_blank" rel="noopener noreferrer" className="flex p-2 border border-white rounded-xl items-center gap-2 hover:bg-white/20 transition-colors duration-200">
                                <GitHub className="w-5 h-5" />
                                <span className="hidden sm:inline">GitHub</span>
                                </a>

                                <a href="https://www.linkedin.com/in/humberto-emmanuel-rosales-martinez-588002316/" target="_blank" rel="noopener noreferrer" className="flex p-2 border border-white rounded-xl items-center gap-2 hover:bg-white/20 transition-colors duration-200">
                                    <Linkedin className="w-5 h-5" />
                                    <span className="hidden sm:inline">LinkedIn</span>
                                </a>
                                <a 
                                    href="mailto:hemmanuelmtz777@gmail.com"
                                    className="flex p-2 border border-white rounded-xl items-center gap-2 min-w-0 hover:bg-white/20 transition-colors duration-200"
                                    >
                                    <Mail className="w-5 h-5 flex-shrink-0" />
                                    <span className="text-sm truncate">hemmanuelmtz777@gmail.com</span>
                                </a>
                            </div>

                        </AnimatedContent>
                        </div>
                        
                    </div>
                    <AnimatedContent  active={hydrated}>
                         <a
                            href="../../docs/Emmanuel_Mtz_CV.pdf"
                            download
                            className="text-white inline-block mt-4 px-6 py-3 border border-white rounded-xl
                           hover:bg-white/20 transition-colors duration-200"
                            >
                            Descargar CV
                        </a>
                    </AnimatedContent>
                   
                </div>
                
            </div>
        </section>
    );
}
