import {MainScreen} from "../screen/MainScreen.jsx";
import {MainDashboard} from "../common/MainDashboard.jsx";

export function Roles() {
    return (
        <MainScreen>
            <MainDashboard role="Adminnistrator" subText="School administration">
                <div className="h-9/10 w-full bg-red-500">

                </div>
            </MainDashboard>
        </MainScreen>
    )
}