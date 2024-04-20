import Image from "next/image";
import Link from "next/link";
import Design from "@/public/DesignVerseSite.png"
import Hack from "@/public/HackathonSite.png"
import Senior from "@/public/SeniorDevSite.png"
import RoseDeisgn from "@/public/RosehackDesign.png"
import { RxArrowBottomRight, RxGithubLogo } from "react-icons/rx";
import { TbBrandFigma } from "react-icons/tb";



const Works = () => {  
  return (
    <div id="works">
      <div className="w-full h-32 flex items-center border-y-[1px]">
        <div className="min-w-[20%] h-full flex border-r-[1px] border-alabaster">
          <p className="m-auto text-5xl font-semibold">works</p>
        </div>
      </div>

      <div className="h-[500px] w-full">
        <div className="w-full h-4/5 flex">
          <div className="w-1/5 h-full flex items-end border-r-[1px] border-alabaster">
            <div className="w-[90%] mx-auto mb-3 text-right flex flex-col">
              <p className="text-2xl">Senior Design Website</p>
              <p className="text-lg">2024</p>
              <p>{"Led an 8-person developer team over a 3-month AGILE development process for a UCR-affiliated website showcasing senior projects. Held weekly meetings with tutoring sessions, distributed React component Github issues to ensure individual team member growth, and devised daily code review support system for blockers"}</p>
            </div>
          </div>
          <div className="w-4/5 h-full overflow-hidden">
            <Image src={Senior} alt="senior design" className="object-cover fade-in-section is-visible" />
          </div>
        </div>

        <div className="w-full h-1/5 flex border-y-[1px] border-alabaster">
          <div className="w-4/5 border-r-[1px] border-alabster divider" />
          <div className="w-1/5 flex justify-center items-center">
            <div className="w-[90%] h-[80%] flex">
              <p className="text-2xl w-3/5">View Project</p>
              <div className="w-2/5 text-3xl flex justify-end items-end">
                <Link target="_blank" href="https://github.com/acm-ucr/senior-design-website/"><RxGithubLogo className="hover:grow" /></Link>
                <Link target="_blank" href="https://seniors-dev.cs.ucr.edu/"><RxArrowBottomRight className="hover:grow"/></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[500px] w-full">
        <div className="w-full h-4/5 flex">
          <div className="w-4/5 h-full overflow-hidden">
            <Image src={Hack} alt="senior design" className="object-cover" />
          </div>
          <div className="w-1/5 h-full flex items-end border-l-[1px] border-alabaster">
            <div className="w-[90%] mx-auto mb-3 text-left flex flex-col">
              <p className="text-2xl">Hackathon Website</p>
              <p className="text-lg">2023-2024</p>
              <p>{"A backend application currently under development that will be used for future hackathon events at UCR. I built several pages, including messages and blog, dynamic routing for admin pages, improved user application forms, and more."}</p>
            </div>
          </div>
        </div>
        <div className="w-full h-1/5 flex border-y-[1px] border-alabaster">
          <div className="w-1/5 flex justify-center items-center">
            <div className="w-[90%] h-[80%] flex">
              <p className="text-2xl w-3/5">View Project</p>
              <div className="w-2/5 text-3xl flex justify-end items-end">
                <Link target="_blank" href="https://github.com/acm-ucr/hackathon-website"><RxGithubLogo className="hover:grow" /></Link>
              </div>
            </div>
          </div>
          <div className="w-4/5 border-l-[1px] border-alabster divider"/>
        </div>
      </div>

      <div className="h-[500px] w-full">
        <div className="w-full h-4/5 flex">
          <div className="w-1/5 h-full flex items-end border-r-[1px] border-alabaster">
            <div className="w-[90%] mx-auto mb-3 text-right flex flex-col">
              <p className="text-2xl">Designverse2024</p>
              <p className="text-lg">2023-2024</p>
              <p>{"The first ever 24-hour beginner-friendly Design-a-Thon hosted by UCR. Built the schedule section with tabs for days of the week along with variable svg tree logs for a more dynamic appearance. Also worked on other front-end elements such as animations, svg positioning, and more."}</p>
            </div>
          </div>
          <div className="w-4/5 h-full overflow-hidden">
            <Image src={Design} alt="senior design" className="object-cover" />
          </div>
        </div>
        <div className="w-full h-1/5 flex border-y-[1px] border-alabaster">
          <div className="w-4/5 border-r-[1px] border-alabster divider"/>
          <div className="w-1/5 flex justify-center items-center">
            <div className="w-[90%] h-[80%] flex">
              <p className="text-2xl w-3/5">View Project</p>
              <div className="w-2/5 text-3xl flex justify-end items-end">
                <Link target="_blank" href="https://github.com/designatucr/designverse2024"><RxGithubLogo className="hover:grow" /></Link>
                <Link target="_blank" href="https://www.designverseucr.org/"><RxArrowBottomRight className="hover:grow"/></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[500px] w-full">
        <div className="w-full h-4/5 flex">
          <div className="w-4/5 h-full overflow-hidden">
            <Image src={RoseDeisgn} alt="senior design" className="object-cover" />
          </div>
          <div className="w-1/5 h-full flex items-end border-l-[1px] border-alabaster">
            <div className="w-[90%] mx-auto mb-3 text-left flex flex-col">
              <p className="text-2xl">RoseHack 2024 Design</p>
              <p className="text-lg">2023-2024</p>
              <p>{"Worked closely with the RoseHack 2024 team to quickly build and design hackathon marketing material. Contributions include designing and creating several Rosehack stickers such as the Cyber Rose Logo, Buotechnica Key, RoseHack WINC sticker, and more. Also created instagram post templates for Hackweek and Meet The Leads."}</p>
            </div>
          </div>
        </div>
        <div className="w-full h-1/5 flex border-y-[1px] border-alabaster">
          <div className="w-1/5 flex justify-center items-center">
            <div className="w-[90%] h-[80%] flex">
              <p className="text-2xl w-3/5">View Project</p>
              <div className="w-2/5 text-3xl flex justify-end items-end">
                <Link target="_blank" href="https://www.figma.com/file/ZoZIki5mO08fdonfKH7Mls/RoseHack-2024-Works?type=design&node-id=0%3A1&mode=design&t=T9j7Vevj3SLxqOEX-1"><TbBrandFigma className="hover:grow" /></Link>
              </div>
            </div>
          </div>
          <div className="w-4/5 border-l-[1px] border-alabster divider"/>
        </div>
      </div>

    </div>
  );
}

export default Works;