export function Auth({iconImage, mainText, smallText, children}) {
    return (
        <div className="h-screen w-screen bg-log-in bg-cover bg-center flex items-center justify-center p-4">
            <div className="
                    grid place-items-center
                    w-full max-w-sm sm:max-w-md md:max-w-lg
                    py-10 px-8 rounded-2xl shadow-2xl
                    bg-white/10 backdrop-blur-md border border-white/10
                ">
                <img src={iconImage} alt="" className="w-14 h-14 object-contain"/>
                <h2 className="text-xl text-zinc-700 font-bold mt-2">
                    {mainText}
                </h2>
                {smallText !== undefined &&
                    <p className="text-xs text-zinc-500 font-semibold mt-2 text-center">
                        {smallText}
                    </p>
                }
                {children}
            </div>
        </div>
    );
}