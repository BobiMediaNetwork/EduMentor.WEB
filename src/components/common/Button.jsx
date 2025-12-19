export function Button({className, onClick, btnText, children}) {
    const btnClassName = "transition duration-300 hover:cursor-pointer " + className;

    return (
        <button className={btnClassName} onClick={onClick}>
            {children}
            {btnText}
        </button>

    )
}