import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export function StatisticsCard({mainText, number, icon, bgColor}){
    return (
        <div className="bg-stone-100 h-full w-1/4 rounded-2xl shadow-xl flex">
            <div className="h-full w-4/6 flex flex-col justify-center pl-6">
                <p className="text-sm text-stone-500">{mainText}</p>
                <h1 className="font-bold text-3xl">{new Intl.NumberFormat('ro-RO').format(number)}</h1>
            </div>
            <div className="h-full w-2/6 flex items-center justify-center">
                <div className={"h-16 w-16 bg-blue-100 rounded-2xl flex items-center justify-center "+bgColor}>
                    <FontAwesomeIcon icon={icon} className="text-xl"/>
                </div>
            </div>
        </div>
    )
}