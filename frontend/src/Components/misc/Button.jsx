export default function Button({borderColor,w = "w-32" , h = "h-12", isBorder, isHover, children, handleClick}) {
    return (
        <button onClick={handleClick} className={`${isBorder ? "border-2" : "" } ${borderColor} ${w} ${h} my-auto rounded-full font-navbar text-xl ${isHover ? `hover:bg-black hover:text-white duration-200` : ""}`} >
            {children}
        </button>
    )
}

