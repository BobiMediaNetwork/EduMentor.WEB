import {AcademicSituation} from "./cards/AcademicSituation.jsx";
import {FastAction} from "./cards/FastActions.jsx";
import {DashboardCalendar} from "./cards/DashboardCalendar.jsx";
import {RecentActivity} from "./cards/RecentActivity.jsx";
import {StatisticsRow} from "./cards/StatisticsRow.jsx";
import {MainDashboard} from "../../../common/MainDashboard.jsx";

export function AdministratorMain() {
    return (
        <MainDashboard role="Adminnistrator" subText="School administration">
            <StatisticsRow/>
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
        </MainDashboard>
    );
}