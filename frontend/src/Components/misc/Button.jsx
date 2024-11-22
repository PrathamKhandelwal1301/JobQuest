export default function Button({borderColor,w , h, isBorder, isHover, children}) {
    return (
        <button className={`${isBorder ? "border-2" : "" } ${borderColor} w-${w} h-${h} my-auto rounded-full font-navbar text-xl ${isHover ? "hover:bg-black hover:text-white duration-200" : ""}`} >
            {children}
        </button>
    )
}

