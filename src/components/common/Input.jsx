export function Input({type, value, onChange, placeholder, className, size = 'w-full', label = ''}) {
    const inputCss = "bg-zinc-400/30 rounded-xl h-8 px-4 focus:outline-none focus:border-2 border-zinc-400/60 " + size;

    return (
        <div className={`w-full ${className} flex flex-col gap-1`}>
            {label && (
                <label className="text-sm text-stone-700">
                    {label}
                </label>
            )}
            <div className="flex flex-col items-center">
                <input
                    className={`${inputCss}`}
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    onChange={onChange}/>
            </div>

        </div>
    );
}