import {Route, Routes} from "react-router-dom";
import {ForgetPassword} from "../auth/ForgetPassword.jsx";
import {ResetPassword} from "../auth/ResetPassword.jsx";
import {LogIn} from "../auth/LogIn.jsx";
import {Dashboard} from "../dashboard/Dashboard.jsx";
import {Profile} from "../profile/Profile.jsx";

export function RouterProvider(){
    return(
        <Routes>
            <Route path="/" element={<LogIn/>}/>
            <Route path="/forget-password" element={<ForgetPassword/>}/>
            <Route path="/reset-password" element={<ResetPassword/>}/>
            <Route path="/home" element={<Dashboard/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
    );
}