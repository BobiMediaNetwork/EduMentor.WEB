import {SideBar} from "../dashboard/sidebar/SideBar.jsx";

export function MainScreen({children}) {
    return (
        <div className="h-screen w-screen flex bg-stone-300">
            <SideBar/>
            <div className="p-2 h-full w-full">
                {children}
            </div>
        </div>
    );
}