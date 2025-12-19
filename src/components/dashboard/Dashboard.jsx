import {SideBar} from "./sidebar/SideBar.jsx";
import {Main} from "./main/Main.jsx";
import {MainScreen} from "../screen/MainScreen.jsx";

export function Dashboard() {
    return (
        <MainScreen>
            <SideBar/>
            <Main/>
        </MainScreen>
    );
}
