import { useState } from "react";
import {DashboardMainDetails} from "../../../common/DashboardMainDetails.jsx";
//Maybe will rewrite
export function DashboardCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date());

    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const daysInMonth = Array.from({length: endOfMonth.getDate()}, (_, i) => i + 1);
    const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    const isToday = (day) => {
        const today = new Date();
        return (
            day === today.getDate() &&
            currentDate.getMonth() === today.getMonth() &&
            currentDate.getFullYear() === today.getFullYear()
        );
    };

    const prevMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
        );
    };

    const nextMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
        );
    };

    return (
        <DashboardMainDetails className="w-full h-2/3 bg-stone-100 shadow-xl rounded-2xl" title="Calendar">
            <div className="rounded-2xl h-full w-full">
                <div className="flex justify-between items-center mb-4">
                    <button
                        onClick={prevMonth}
                        className="text-slate-500 hover:text-slate-700 font-bold"
                    >
                        ‹
                    </button>
                    <span className="font-semibold text-slate-800">
          {currentDate.toLocaleString("default", {month: "long"})}{" "}
                        {currentDate.getFullYear()}
        </span>
                    <button
                        onClick={nextMonth}
                        className="text-slate-500 hover:text-slate-700 font-bold"
                    >
                        ›
                    </button>
                </div>

                <div className="grid grid-cols-7 gap-1 text-xs font-semibold text-slate-500 mb-1">
                    {weekdays.map((day) => (
                        <div key={day} className="text-center">{day}</div>
                    ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                    {Array.from({length: (startOfMonth.getDay() + 6) % 7}).map((_, i) => (
                        <div key={`empty-${i}`}/>
                    ))}

                    {daysInMonth.map((day) => (
                        <div
                            key={day}
                            className={`text-center py-2 rounded-full cursor-pointer ${
                                isToday(day) ? "bg-blue-600 text-white font-bold" : "text-slate-700"
                            } hover:bg-blue-100`}
                        >
                            {day}
                        </div>
                    ))}
                </div>
            </div>
        </DashboardMainDetails>
    );
}