import {MainDashboard} from "../../../common/MainDashboard.jsx";
import {ComingSoon} from "../../../common/ComingSoon.jsx";

export function TeacherMain() {
    return (
        <MainDashboard role="Teacher" subText="See you classes, students and schedule">
            <ComingSoon/>
        </MainDashboard>
    );
}
