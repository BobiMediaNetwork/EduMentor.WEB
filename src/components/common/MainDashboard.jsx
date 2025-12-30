import {MainTitle} from "./MainTitle.jsx";

export function MainDashboard({role, subText, children}) {
    return (
        <div className="h-full w-full flex flex-col gap-2">
            <MainTitle role={role} subText={subText}/>
            {children}
        </div>
    );
}