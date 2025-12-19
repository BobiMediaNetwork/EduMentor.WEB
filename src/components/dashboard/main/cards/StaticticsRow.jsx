import {StatisticsCard} from "./StatisticsCard.jsx";
import {faChalkboardTeacher, faClose, faGraduationCap, faSchool, faUser} from "@fortawesome/free-solid-svg-icons";

export function StaticticsRow() {
    const width = "1/5"
    return (
        <div className="h-2/10 w-full py-4 gap-3 flex items-center justify-center">
            <StatisticsCard mainText="Students" number="1245" icon={faGraduationCap} bgColor="bg-blue-100"
                            className={width}/>
            <StatisticsCard mainText="Teachrs" number="57" icon={faChalkboardTeacher} bgColor="bg-green-100"
                            className={width}/>
            <StatisticsCard mainText="Grades" number="10" icon={faSchool} bgColor="bg-orange-100" className={width}/>
            <StatisticsCard mainText="Parents" number="2415" icon={faUser} bgColor="bg-purple-100" className={width}/>
            <StatisticsCard mainText="Absences today" number="2" icon={faClose} bgColor="bg-red-100" className={width}/>
        </div>
    )
}