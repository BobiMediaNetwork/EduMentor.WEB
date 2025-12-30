import {SideBar} from "../dashboard/sidebar/SideBar.jsx";

export function MainScreen({setRole, children}) {
    return (
        <div className="h-screen w-screen flex bg-stone-300">
            <SideBar setRole={setRole}/>
            <div className="p-2 h-full w-full">
                {children}
            </div>
        </div>
    );
}