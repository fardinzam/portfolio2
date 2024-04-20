import Link from "next/link"

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between border-b-[1px] border-alabaster">
      <div className="p-5 w-1/5 h-full border-r-[1px] border-alabaster divider"  style={{height:"12vh"}} />
      <div className="flex justify-end mr-5 text-lg">
        <Link href="#works" className='mr-5 hover:textColor'>works</Link>
        <Link href="#contact" className='mr-5 hover:textColor'>contact</Link>
      </div>
    </div>
  );
}

export default Navbar;