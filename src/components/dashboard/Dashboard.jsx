import {SideBar} from "./sidebar/SideBar.jsx";
import {AdministratorMain} from "./main/administrator/AdministratorMain.jsx";
import {MainScreen} from "../screen/MainScreen.jsx";
import {useState} from "react";
import {StudentMain} from "./main/student/StudentMain.jsx";
import {TeacherMain} from "./main/teacher/TeacherMain.jsx";
import {DirectorMain} from "./main/director/DirectorMain.jsx";
import {ParentMain} from "./main/parent/ParentMain.jsx";

export function Dashboard() {
    const [role, setRole] = useState("Admin");

    function renderRoleDashboard(){
        const roleComponents = {
            Admin: <AdministratorMain />,
            Student: <StudentMain />,
            Teacher: <TeacherMain />,
            Director: <DirectorMain />,
            Parent: <ParentMain />,
        };

        return roleComponents[role] ?? null;
    }

    return (
        <MainScreen>
            <SideBar setRole={setRole}/>
            {renderRoleDashboard()}
        </MainScreen>
    );
}
