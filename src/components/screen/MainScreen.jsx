import {SideBar} from "../dashboard/sidebar/SideBar.jsx";
import {MainDashboard} from "../common/MainDashboard.jsx";

export function MainScreen({children}) {
    return (
        <div className="h-screen w-screen flex bg-stone-300">
            <SideBar/>
            <div className="p-2 h-full w-full">
                <MainDashboard role="Adminnistrator" subText="School administration">
                    {children}
                </MainDashboard>
            </div>
        </div>
    );
}