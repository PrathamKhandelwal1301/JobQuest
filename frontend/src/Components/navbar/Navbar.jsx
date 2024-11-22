import { useNavigate } from "react-router";
import Button from "../misc/Button";


export default function Navbar() {
    const navigate = useNavigate();
    function handleClick(){
        console.log("click");
        navigate("/signin")
    }
    return (
        <div className="w-[100vw] shadow-lg">
        <div className="h-[10vh] flex align-middle w-[80vw] m-auto font-navbar text-5xl justify-between">
            <h1 className="flex align-center h-[50%] my-auto">JobQuest</h1>
            <div className="h-[10vh] flex align-middle my-auto">
                <Button handleClick = {handleClick} borderColor={"border-black"} isBorder = {true} isHover = {true}><h1>Sign In</h1></Button>
                <Button handleClick = {handleClick} borderColor={"border-black"} isBorder = {false} isHover = {false}><h1>Sign up</h1></Button>
            </div>
        </div>
        </div>
    )
}


