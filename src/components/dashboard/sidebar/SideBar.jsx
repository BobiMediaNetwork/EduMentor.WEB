import {DashboardTitle} from "./DashboardTitle.jsx";
import {LogOut} from "./LogOut.jsx";
import {SideBarButton} from "./SideBarButton.jsx";
import {
    faChalkboardTeacher,
    faClipboardList,
    faComment,
    faFileAlt,
    faGraduationCap,
    faHouse,
    faTimesCircle,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

const menuItems = [
    {label: "Dashboard", icon: faHouse, route: "/home"},
    {label: "Students", icon: faUser, route: "/students"},
    {label: "Teachers", icon: faChalkboardTeacher, route: "/teachers"},
    {label: "Grades", icon: faGraduationCap, route: "/grades"},
    {label: "Scores", icon: faClipboardList, route: "/scores"},
    {label: "Absences", icon: faTimesCircle, route: "/absences"},
    {label: "Feedback", icon: faComment, route: "/feedback"},
    {label: "Reports", icon: faFileAlt, route: "/reports"}
];

export function SideBar({setRole}) {
    const roles = ['Admin', 'Student', 'Parent', 'Teacher', 'Director'];
    const [num, setNum] = useState(1);
    const navigate = useNavigate();
    const location = useLocation();

    function nextRole() {
        setRole(roles[num]);
        setNum(prev => {
            if (prev === 4)
                return 0;
            return prev + 1;
        });
    }

    function buttonOnClick(route) {
        // modify later when other components will be added
        if (route === '/home') {
            navigate(route);
        } else {
            console.log("Coming soon...");
        }
    }

    return (
        <div className="h-full w-1/6 bg-slate-900 rounded-r-2xl">
            <DashboardTitle/>
            <div className="h-8/10 w-full flex flex-col items-start p-4">
                {menuItems.map((item) => (
                    <SideBarButton
                        key={item.label}
                        buttonName={item.label}
                        icon={item.icon}
                        isActive={location.pathname === item.route}
                        onClick={() => buttonOnClick(item.route)}
                    />
                ))}
                <SideBarButton buttonName="Next Role" icon={faFileAlt} onClick={nextRole}/>
            </div>
            <LogOut/>
        </div>
    );
}