import {DashboardMainDetails} from "../../../../common/DashboardMainDetails.jsx";

export function RecentActivity(){
    const items = [
        "Teacher Ionescu added a grade at IX A",
        "New feedback at VII B",
        "New teacher for X C",
        "New Teacher for X C",
    ];
    return (
        <DashboardMainDetails
            className="w-full h-2/5 bg-stone-100 shadow-xl rounded-2xl flex flex-col gap-2"
            title="Recent Activity">
            <div className="h-full w-full">
                <ul className="space-y-3 text-sm text-slate-600">
                    {items.map((item, i) => (
                        <li key={i}>• {item}</li>
                    ))}
                </ul>
            </div>
        </DashboardMainDetails>
    );
}