import {MainTitle} from "./cards/MainTitle.jsx";
import {faChalkboardTeacher, faClose, faGraduationCap, faSchool, faUser} from "@fortawesome/free-solid-svg-icons";
import {StatisticsCard} from "./cards/StatisticsCard.jsx";
import {AcademicSituation} from "./cards/AcademicSituation.jsx";
import {FastAction} from "./cards/FastActions.jsx";
import {DashboardCalendar} from "./cards/DashboardCalendar.jsx";
import {RecentActivity} from "./cards/RecentActivity.jsx";

export function Main() {

    return (
        <div className="h-full w-5/6 p-2 flex flex-col gap-2">
            <MainTitle role="Adminnistrator" subText="School administration"/>
            <div className="h-2/10 w-full py-4 gap-3 flex items-center justify-center">
                <StatisticsCard mainText="Students" number="1245" icon={faGraduationCap} bgColor="bg-blue-100" className="w-1/5"/>
                <StatisticsCard mainText="Teachrs" number="57" icon={faChalkboardTeacher} bgColor="bg-green-100" className="w-1/5"/>
                <StatisticsCard mainText="Grades" number="10" icon={faSchool} bgColor="bg-orange-100" className="w-1/5"/>
                <StatisticsCard mainText="Parents" number="2415" icon={faUser} bgColor="bg-purple-100" className="w-1/5"/>
                <StatisticsCard mainText="Absences today" number="2" icon={faClose} bgColor="bg-red-100" className="w-1/5"/>
            </div>
            <div className="h-7/10 w-full flex gap-3">
                <div className="w-2/3 h-full flex flex-col gap-3">
                    <AcademicSituation/>
                    <RecentActivity/>
                </div>
                <div className="w-1/3 h-full flex flex-col gap-3">
                    <FastAction/>
                    <DashboardCalendar/>
                </div>
            </div>
        </div>
    );
}