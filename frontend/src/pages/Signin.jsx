import { useForm } from "react-hook-form"
import Button from "../Components/misc/Button";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


export default function Signin() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [login, setLogin] = useState(true); 

    function handleClick(e){
        e.preventDefault();
        setLogin(!login);   
    }

    function onSubmit(data){
        console.log(data)
    }

    return (
            <div className="h-[100vh] w-[100vw] flex relative overflow-hidden">
            <div className="h-[80vh] w-[80vw] m-auto my-auto flex rounded-2xl overflow-hidden custom_shadow">
                <AnimatePresence>
                {   login &&
                    (<motion.div initial = {{opacity : 0}} animate = {{opacity : 1, position : "static"}} exit = {{opacity : 0}} transition={{ duration : 0.3 }} className="w-[60%] h-[100%] grid grid-rows-[25%,35%,25%] mt-10 absolute">
                    <div className="flex align-middle justify-center"><h1 className="my-auto text-6xl font-navbar font-bold">Log into your account</h1></div>
                    <div className="flex justify-center items-center">
                        <form className="m-auto w-[80%] flex flex-col gap-7 items-center justify-start" onSubmit={handleSubmit(onSubmit)}>
                            <input className="w-96 h-16 mx-auto borde border-2 border-slate-300 rounded-3xl focus:outline-none focus:border-black font-thin font-navbar duration-300 p-5" placeholder="Email" type="email" {...register("email", {required : true})}/>
                            <input className="w-96 h-16 mx-auto borde border-2 border-slate-300 rounded-3xl focus:outline-none focus:border-black font-thin font-navbar duration-300 p-5" placeholder = "Password"  type="password" {...register("password", {required: true})}/>
                            <Button h = {"h-16"} w = {"w-96"} isHover={true} isBorder={true} borderColor={"border-black"}>Sign In</Button>
                        </form>
                    </div>
                    <div className="font-navbar text-md pt-7 grid grid-rows-[20%,30%] justify-center">
                        <div className="flex h-max">
                            <div className="w-24 h-0 inline border border-black mt-2.5 mx-2 opacity-25"></div> <h1 className=" opacity-25 h-max">or Sign In using </h1> <div className="opacity-25 w-24 h-0 inline border border-black mt-2.5 mx-2"></div>
                        </div>
                        <div className="flex items-center justify-center my-10 gap-9">
                        <AiFillGoogleCircle size={40} />
                        <FaLinkedin size={40} />
                        <FaGithub size={40} />
                        </div>
                    </div>
                </motion.div>)
                }
                </AnimatePresence>
                <AnimatePresence>
                {
                    login == false &&
                        (<motion.div initial = {{opacity : 0}} animate = {{opacity : 1, position : "static"}} exit = {{opacity : 0}} transition={{ duration : 0.3, delay : 0.3 }} className="w-[60%] h-[100%] grid grid-rows-[25%,35%,25%] mt-10 absolute">
                            <div className="flex align-middle justify-center"><h1 className="my-auto text-6xl font-navbar font-bold">Create new account</h1></div>
                            <div className="flex justify-center items-center">
                                <form className="m-auto w-[80%] flex flex-col gap-7 items-center justify-start" onSubmit={handleSubmit(onSubmit)}>
                                    <input className="w-96 h-16 mx-auto borde border-2 border-slate-300 rounded-3xl focus:outline-none focus:border-black font-thin font-navbar duration-300 p-5" placeholder="Email" type="email" {...register("email", {required : true})}/>
                                    <input className="w-96 h-16 mx-auto borde border-2 border-slate-300 rounded-3xl focus:outline-none focus:border-black font-thin font-navbar duration-300 p-5" placeholder = "Password"  type="password" {...register("password", {required: true})}/>
                                    <Button h = {"h-16"} w = {"w-96"} isHover={true} isBorder={true} borderColor={"border-black"}>Sign Up</Button>
                                </form>
                            </div>
                            <div className="font-navbar text-md pt-7 grid grid-rows-[20%,30%] justify-center">
                                <div className="flex h-max">
                                    <div className="w-24 h-0 inline border border-black mt-2.5 mx-2 opacity-25"></div> <h1 className=" opacity-25 h-max">or Sign Up using </h1> <div className="opacity-25 w-24 h-0 inline border border-black mt-2.5 mx-2"></div>
                                </div>
                                <div className="flex items-center justify-center my-10 gap-9">
                                <AiFillGoogleCircle size={40} />
                                <FaLinkedin size={40} />
                                <FaGithub size={40} />
                                </div>
                            </div>
                        </motion.div>
                    )
                }
                </AnimatePresence>
                <div className="w-[40%] h-[100%] flex items-center bg-black">
                    <div className="h-[60%] p-10">
                        <h1 className="text-7xl font-navbar text-white font-bold text-center">Welcome Back,</h1>
                        <h1 className="text-md text-white font-navbar w-[75%] mx-auto mt-6 text-center">Login to your account to continue your hunt for the job you deserve.</h1>
                        <div className="flex h-max text-white mt-10 justify-center opacity-80">
                            <div className="w-20 h-0 inline border border-white mt-2.5 mx-2"></div> <h1 className="h-max">OR</h1> <div className="w-20 h-0 inline border border-white mt-2.5 mx-2"></div>
                        </div>
                            <div className="flex mt-10 justify-center">
                                <button onClick={(e) => handleClick(e)} className={`text-white border-2 border-white w-80 h-16 my-auto rounded-full font-navbar text-xl hover:bg-white hover:text-black duration-200`} > Sign Up </button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

