import { FaFigma, FaHtml5, FaReact} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiAdobeillustrator, SiJquery } from "react-icons/si";
import { IoLogoJavascript} from "react-icons/io5";

const Techstack = () => {
    return (
        <div className="w-3/5 flex justify-between mx-auto text-6xl mb-10">
            <FaFigma/>
            <SiAdobeillustrator />
            <FaHtml5 />
            <FaReact />
            <SiTailwindcss />
            <SiNextdotjs />
            <SiTypescript />
            <IoLogoJavascript />
            <SiJquery />
        </div>
    );
}

export default Techstack;