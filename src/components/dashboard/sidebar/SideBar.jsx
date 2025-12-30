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
import {useState} from "react";

export function SideBar({setRole}) {
    const roles = ['Admin', 'Student', 'Parent', 'Teacher', 'Director'];
    const [num, setNum] = useState(1)

    function nextRole() {
        setRole(roles[num]);
        setNum(prev => {
            if (prev === 4)
                return 0
            return prev + 1
        });
    }

    return (
        <div className="h-full w-1/6 bg-slate-900 rounded-r-2xl">
            <DashboardTitle/>
            <div className="h-8/10 w-full flex flex-col items-start p-4">
                <SideBarButton buttonName="Dashboard" icon={faHouse} isActive onClick={() => {
                    console.log("click")
                }}/>
                <SideBarButton buttonName="Students" icon={faUser} onClick={() => {
                    console.log("click")
                }}/>
                <SideBarButton buttonName="Teachers" icon={faChalkboardTeacher} onClick={() => {
                    console.log("click")
                }}/>
                <SideBarButton buttonName="Grades" icon={faGraduationCap} onClick={() => {
                    console.log("click")
                }}/>
                <SideBarButton buttonName="Scores" icon={faClipboardList} onClick={() => {
                    console.log("click")
                }}/>
                <SideBarButton buttonName="Absences" icon={faTimesCircle} onClick={() => {
                    console.log("click")
                }}/>
                <SideBarButton buttonName="Feedback" icon={faComment} onClick={() => {
                    console.log("click")
                }}/>
                <SideBarButton buttonName="Reports" icon={faFileAlt} onClick={() => {
                    console.log("click")
                }}/>
                <SideBarButton buttonName="Settings" icon={faCog} onClick={() => {
                    console.log("click")
                }}/>
                <SideBarButton buttonName="Next Role" icon={faFileAlt} onClick={nextRole}/>
            </div>
            <LogOut/>
        </div>
    );
}