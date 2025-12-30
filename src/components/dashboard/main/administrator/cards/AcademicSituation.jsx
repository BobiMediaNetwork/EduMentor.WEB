import {AcademicInformation} from "./AcademicInformation.jsx";
import {DashboardMainDetails} from "../../../../common/DashboardMainDetails.jsx";

export function AcademicSituation() {
    return (
        <DashboardMainDetails
            className="w-full h-3/5 bg-stone-100 shadow-xl rounded-2xl flex flex-col"
            title="Academic critical situations"
        >
            <div className="w-full h-full flex flex-col py-3 gap-3">
                <AcademicInformation mainInformation="3 students will not pass" severity="Critic"/>
                <AcademicInformation mainInformation="2 grades with average smaller than 6" severity="Attention"/>
                <AcademicInformation mainInformation="3 students will not pass" severity="Attention"/>
                <div
                    className="w-full h-1/7 flex justify-end text-sm text-stone-500 italic underline hover:cursor-pointer">
                    +3 more
                </div>
            </div>
        </DashboardMainDetails>
    );
}