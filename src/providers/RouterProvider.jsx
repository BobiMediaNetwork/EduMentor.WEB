import {Route, Routes} from "react-router-dom";
import {LogIn} from "../components/auth/LogIn.jsx";
import {ResetPassword} from "../components/auth/ResetPassword.jsx";
import {ForgetPassword} from "../components/auth/ForgetPassword.jsx";

export function RouterProvider(){
    return(
        <Routes>
            <Route path="/" element={<LogIn/>}/>
            <Route path="/send-reset-link" element={<ForgetPassword/>}/>
            <Route path="/reset-password" element={<ResetPassword/>}/>
        </Routes>
    );
}