import {DashboardTitle} from "./DashboardTitle.jsx";
import {LogOut} from "./LogOut.jsx";
import {ButtonWithIcon} from "../../common/ButtonWithIcon.jsx";
import {
    faChalkboardTeacher,
    faClipboardList,
    faComment,
    faFileAlt,
    faGraduationCap,
    faHouse,
    faTimesCircle,
    faUser,
    faUsers,
    faUsersCog,
    faUserShield,
    faUsersRectangle
} from "@fortawesome/free-solid-svg-icons";
import {useLocation, useNavigate} from "react-router-dom";

const menuItems = [
    {label: "Dashboard", icon: faHouse, route: "/home"},
    {label: "Roles", icon: faUserShield, route: "/roles"},
    {label: "Students", icon: faUser, route: "/students"},
    {label: "Teachers", icon: faChalkboardTeacher, route: "/teachers"},
    {label: "Parents", icon: faUsers, route: "/parents"},
    {label: "Directors", icon: faUsersRectangle, route: "/directors"},
    {label: "Administrators", icon: faUsersCog, route: "/administrators"},
    {label: "Grades", icon: faGraduationCap, route: "/grades"},
    {label: "Scores", icon: faClipboardList, route: "/scores"},
    {label: "Absences", icon: faTimesCircle, route: "/absences"},
    {label: "Feedback", icon: faComment, route: "/feedback"},
    {label: "Reports", icon: faFileAlt, route: "/reports"}
];

export function SideBar() {
    const navigate = useNavigate();
    const location = useLocation();

    function buttonOnClick(route) {
        // modify later when other components will be added
        if (route === '/home' || route === '/roles') {
            navigate(route);
        } else {
            console.log("Coming soon...");
        }
    }

    return (
        <div className="h-full w-1/6 bg-slate-900 rounded-r-2xl">
            <DashboardTitle/>
            <div className="h-8/10 w-full flex flex-col items-start px-4 py-1">
                {menuItems.map((item) => (
                    <ButtonWithIcon
                        key={item.label}
                        buttonName={item.label}
                        icon={item.icon}
                        isActive={location.pathname === item.route}
                        onClick={() => buttonOnClick(item.route)}
                    />
                ))}
            </div>
            <LogOut/>
        </div>
    );
}