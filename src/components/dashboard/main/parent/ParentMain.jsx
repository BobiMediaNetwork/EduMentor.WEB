import {MainDashboard} from "../../../common/MainDashboard.jsx";
import {ComingSoon} from "../../../common/ComingSoon.jsx";

export function ParentMain() {
    return (
        <MainDashboard role="Parent" subText="See your child situation">
            <ComingSoon/>
        </MainDashboard>
    );
}
