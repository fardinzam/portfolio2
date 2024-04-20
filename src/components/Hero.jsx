import Techstack from "./Techstack";

const Hero = () => {
    return (
      <div>
        <div className="w-full flex">
          <div className="w-1/5 grid grid-cols-1 content-end  border-r-[1px] border-alabaster">
              <div className="w-[80%] mx-auto text-right">
                <p className="text-xl font-bold w-full">Fardin (Dean) Zaman</p>
                <p className="mb-5 w-full">Portfolio</p>
                <p className="w-full mb-10">
                  {"Hi, I'm Dean, a student studying at UC Riverside. I'm majoring in Computer Science w/ Business Applicatons. I'm eager to leverage technology to drive innovative solutions and leave my mark on my community."}
                </p>  
              </div>
          </div>
          <div className="w-4/5 text-[200px] font-bold">
            <p className="mx-10">fardin</p>
            <p className="text-right mx-10">zaman</p>
            <Techstack />
          </div>
        </div>
      </div>
    );
}

export default Hero;