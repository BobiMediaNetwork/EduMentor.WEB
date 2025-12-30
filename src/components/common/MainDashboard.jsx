import {MainTitle} from "../dashboard/main/administrator/cards/MainTitle.jsx";

export function MainDashboard({role, subText, children}) {
    return (
        <div className="h-full w-5/6 p-2 flex flex-col gap-2">
            <MainTitle role={role} subText={subText}/>
            {children}
        </div>
    );
}