import iconImage from '../../assets/auth/log_in_icon.png';
import {useState} from "react";
import {Input} from "../common/Input.jsx";
import {Auth} from "./Auth.jsx";
import {useNavigate} from "react-router-dom";

export function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleLogIn() {
        console.log(email);
        console.log(password);
        setEmail('');
        setPassword('');
        navigate('/home');
    }

    function handleResetPassword(){
        navigate("/forget-password");
    }

    return (
        <Auth iconImage={iconImage} mainText="Sign in with your email">
            <Input
                className='mt-4'
                placeholder="Email" value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            <Input
                className='mt-2'
                placeholder="Password"
                type="password" value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            <button
                className="w-5/6 text-right mt-2 h-8 italic text-zinc-500 hover:cursor-pointer"
                onClick={handleResetPassword}>
                    Forgot password?
            </button>
            <button
                className="
                    w-5/6 bg-zinc-800 text-zinc-300 rounded-xl mt-2 h-8 hover:cursor-pointer hover:bg-zinc-300
                    hover:text-zinc-800 hover:border hover:border-zinc-800 duration-300"
                onClick={handleLogIn}>
                    Get Started
            </button>
        </Auth>
    );
}