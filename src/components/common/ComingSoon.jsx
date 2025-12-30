export function ComingSoon(){
    return (
        <div
            className="h-full w-full rounded-2xl bg-gradient-to-br from-stone-100 to-stone-200 shadow-md flex flex-col items-center justify-center">
            <span className="mb-4 text-sm uppercase tracking-widest text-stone-400">
                Feature in progress
            </span>
            <h1 className="font-extrabold text-5xl leading-tight text-stone-600">
                Coming Soon
            </h1>
            <p className="mt-6 text-stone-500 italic">
                We’re working on something great for you 🚀
            </p>
        </div>
    );
}