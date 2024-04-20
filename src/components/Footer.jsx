import Link from "next/link";

const Footer = () => {  
  return (
    <div id="contact" className="flex">
      <div className="w-4/5 select-none mx-4">
        <p className="text-7xl ">contact me!</p>
        <p className="text-7xl ">contact me!</p>
        <p className="text-7xl ">contact me!</p>
        <p className="text-7xl ">contact me!</p>
      </div>
      <div className="w-1/5 text-right text-lg grid grid-cols-1 gap-1 place-content-end m-5">
        <p><Link target="_blank" href="https://github.com/fardinzam" className="hover:textColor">Github</Link></p>
        <p><Link target="_blank" href="https://www.linkedin.com/in/fardinzaman/" className="hover:textColor">LinkedIn</Link></p>
        <p><Link target="_blank" href="mailto:fzama006@ucr.edu" className="hover:textColor">fzama006@ucr.edu</Link></p>
        <p className="cursor-default">310-480-5359</p>
      </div>
    </div>
  );
}

export default Footer;