import {useState} from "react";
import iconImage from "../../assets/auth/reset_password_icon.png";
import {Auth} from "./Auth.jsx";
import {Input} from "../common/Input.jsx";

export function ResetPassword() {
    const [password, setPassword] = useState('');
    const [retypedPassword, setRetypedPassword] = useState('');

    function handleResetPassword() {
        console.log(password);
        console.log(retypedPassword);
    }

    return (
        <Auth iconImage={iconImage} mainText="Enter your new password">
            <Input
                className='mt-2'
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            <Input
                className='mt-2'
                placeholder="Retype Password"
                type="password"
                value={retypedPassword}
                onChange={(e) => setRetypedPassword(e.target.value)}/>
            <button
                className="
                    w-5/6 bg-zinc-800 text-zinc-300 rounded-xl mt-2 h-8 hover:cursor-pointer hover:bg-zinc-300
                    hover:text-zinc-800 hover:border hover:border-zinc-800 duration-300"
                onClick={handleResetPassword}>
                Reset Password
            </button>
        </Auth>
    );
}