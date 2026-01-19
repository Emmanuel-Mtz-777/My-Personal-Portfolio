import { useTranslation } from "react-i18next";
import LogoLoop from "../effects/LogoLoop";
import Astro from "../icons/tec/Astro"; 
import Css from "../icons/tec/Css"; 
import Docker from "../icons/tec/Docker"; 
import Express from "../icons/tec/Express"; 
import Git from "../icons/tec/Git"; 
import Html from "../icons/tec/Html"; 
import Javascript from "../icons/tec/Javascript"; 
import Laravel from "../icons/tec/Laravel"; 
import Mysql from "../icons/tec/Mysql"; 
import Nodejs from "../icons/tec/Node"; 
import ReactIcon from "../icons/tec/React"; 
import Tailwind from "../icons/tec/Tailwind"; 
import ReactNative from "../icons/tec/ReactNative"; 
import Typescript from "../icons/tec/Typescript";
import Vue from "../icons/tec/Vue";
import { SiFigma, SiSupabase } from "react-icons/si";

const ICON_SIZE="size-10"

const frontendLogos = [
    { node: <Html className={ICON_SIZE} />, title: "HTML" },
    { node: <Css className={ICON_SIZE} />, title: "CSS"},
    { node: <Javascript className={ICON_SIZE} />, title: "JavaScript" },
    { node: <Typescript className={ICON_SIZE} />, title: "TypeScript" },
    { node: <Tailwind className={ICON_SIZE} />, title: "Tailwind CSS"},
    { node: <Astro className={ICON_SIZE} />, title: "Astro"},
    { node: <Vue className={ICON_SIZE} />, title: "Vue.js"},
    { node: <ReactIcon className={ICON_SIZE} />, title: "React"},
    { node: <ReactNative className={ICON_SIZE} />, title: "React Native"},
];

const backendLogos = [
    { node: <Nodejs className={ICON_SIZE}/>, title: "Node.js" },
    { node: <Express className={ICON_SIZE}/>, title: "Express" },
    { node: <Laravel className={ICON_SIZE}/>, title: "Laravel" },
    { node: <Mysql className={ICON_SIZE}/>, title: "MySQL" },
    { node: <SiSupabase className={ICON_SIZE} color='#34B27B'/>, title: "Supabase" }
];

const toolsLogos = [
    { node: <Docker className={ICON_SIZE}/>, title: "Docker"},
    { node: <Git className={ICON_SIZE}/>, title: "Git"},
    { node: <SiFigma className={ICON_SIZE} color='#fff' />, title: "Figma"}

];

export default function Stack(){
    const {t} = useTranslation();
    return(
        <section id="stack" className="relative w-full flex flex-col items-center pt-20">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-12 text-start" >{t("stack.title")}</h2>
            <div className="w-full max-w-[720px] flex flex-col gap-6 px-4">
                <p className="text-lg text-white">{t("stack.description")}</p>
                <p className="text-lg text-white">{t("stack.completeDescription")}</p>
                <div style={{ height: '150px', position: 'relative', overflow: 'hidden', border:'1px solid #fff', borderRadius: '8px', padding: '16px' }}> 
                    <h3 className="text-2xl text-white font-semibold mb-4">Frontend</h3>
                    <LogoLoop
                        logos={frontendLogos}
                        speed={60}
                        direction="left"
                        logoHeight={40}
                        gap={40}
                        hoverSpeed={0}
                        scaleOnHover
                        fadeOut
                        fadeOutColor="transparent"
                        ariaLabel="Technology partners"
                    />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <div style={{ height: '150px', position: 'relative', overflow: 'hidden', border:'1px solid #fff', borderRadius: '8px', padding: '16px'}} className="w-full sm:w-1/2">
                        <h3 className="text-2xl text-white font-semibold mb-4">Backend</h3>
                        <LogoLoop
                            logos={backendLogos}
                            speed={60}
                            direction="right"
                            logoHeight={40}
                            gap={40}
                            hoverSpeed={0}
                            scaleOnHover
                            fadeOut
                            fadeOutColor="transparent"
                            ariaLabel="Technology partners"
                        />
                    </div>
                    <div style={{ height: '150px', position: 'relative', overflow: 'hidden', border:'1px solid #fff', borderRadius: '8px', padding: '16px'}} className="w-full sm:w-1/2">
                        <h3 className="text-2xl text-white font-semibold mb-4">Tools</h3>
                        <LogoLoop
                            logos={toolsLogos}
                            speed={60}
                            direction="left"
                            logoHeight={40}
                            gap={40}
                            hoverSpeed={0}
                            scaleOnHover
                            fadeOut
                            fadeOutColor="transparent"
                            ariaLabel="Technology partners"
                        />
                    </div>
                </div>
                
            </div>
            
        </section>
    )
}