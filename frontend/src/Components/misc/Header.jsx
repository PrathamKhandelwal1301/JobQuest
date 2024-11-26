import { IoExitOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();

  function handleClick(){
      navigate("/");
  }

  return <header className=" relative p-5 border-b-2 border-black flex items-center">
    <div className=" absolute w-[30%] right-0 flex justify-end items-center mr-10 ">
      <img src="https://ui-avatars.com/api/?name=pk&background=000000&color=ffffff&bold=true" className="rounded-full h-10" alt="" />
      <IoExitOutline size={40}  className="ml-6" onClick={handleClick}/>
    </div>
  </header>;
}

export default Header;