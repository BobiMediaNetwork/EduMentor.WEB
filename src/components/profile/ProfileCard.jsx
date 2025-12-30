export function ProfileCard({title, lines}) {
    return (
        <div className="h-full w-1/3 bg-white rounded-2xl shadow-lg flex flex-col gap-3">
            <div className="h-5/20 w-full p-3 flex items-end text-md font-semibold">
                {title}
            </div>
            {lines.map((line) => (
                <div className="h-2/20 w-full flex" key={line.index}>
                    <div className="h-full w-3/8 flex flex-col items-start justify-center px-3 text-sm text-slate-400">
                        {line.key}
                    </div>
                    <div className="h-full w-5/8 flex flex-col items-end justify-center px-3 text-sm font-semibold">
                        {line.value}
                    </div>
                </div>
            ))}
        </div>
    )
}