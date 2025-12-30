export function AcademicInformation({mainInformation, severity}) {
    let className = "h-auto w-full rounded-2xl flex justify-center text-red-800"

    if (severity === "Critic"){
        className += " text-red-800 bg-red-300"
    }else if(severity === "Attention"){
        className += " text-yellow-800 bg-yellow-300"
    }

    return (
        <div className="w-full h-2/7 bg-stone-200 rounded-lg flex px-3">
            <div className="h-full w-17/20 flex items-center text-sm">
                {mainInformation}
            </div>
            <div className="h-full w-3/20 flex items-center justify-center">
                <div
                    className={className}>
                    {severity}
                </div>
            </div>
        </div>
    );
}