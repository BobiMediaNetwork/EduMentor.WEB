export function Input({type, value, onChange, placeholder, className}) {
    const inputCss = "w-5/6 bg-zinc-400/30 rounded-xl h-8 px-4 focus:outline-none focus:border-2 border-zinc-400/60";

    return (
        <input
            className={`${inputCss} ${className}`}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}/>
    );
}