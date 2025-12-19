import {DashboardTitle} from "./DashboardTitle.jsx";
import {LogOut} from "./LogOut.jsx";
import {SideBarButton} from "./SideBarButton.jsx";
import {
    faChalkboardTeacher,
    faClipboardList, faCog, faComment, faFileAlt,
    faGraduationCap,
    faHouse, faTimesCircle,
    faUser
} from "@fortawesome/free-solid-svg-icons";

export function SideBar() {
    return (
        <div className="h-full w-1/6 bg-slate-900 rounded-r-2xl">
            <DashboardTitle/>
            <div className="h-8/10 w-full flex flex-col items-start p-4">
                <SideBarButton buttonName="Dashboard" icon={faHouse} isActive/>
                <SideBarButton buttonName="Students" icon={faUser}/>
                <SideBarButton buttonName="Teachers" icon={faChalkboardTeacher} />
                <SideBarButton buttonName="Grades" icon={faGraduationCap} />
                <SideBarButton buttonName="Scores" icon={faClipboardList} />
                <SideBarButton buttonName="Absences" icon={faTimesCircle} />
                <SideBarButton buttonName="Feedback" icon={faComment} />
                <SideBarButton buttonName="Reports" icon={faFileAlt} />
                <SideBarButton buttonName="Settings" icon={faCog} />
            </div>
            <LogOut/>
        </div>)
}