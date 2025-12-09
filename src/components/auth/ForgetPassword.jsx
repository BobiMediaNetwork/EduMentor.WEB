import iconImage from "../../assets/auth/send_email_icon.png";
import {useState} from "react";
import {Auth} from "./Auth.jsx";
import {Input} from "../common/Input.jsx";

export function ForgetPassword() {
    const [email, setEmail] = useState('');

    function handleSendEmail() {
        console.log(email);
    }

    return (
        <Auth iconImage={iconImage} mainText="Forgot your password?"
              smallText="Enter your email and we will send a link for you to reset your password">
            <Input
                className='mt-2'
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            <button
                className="
                    w-5/6 bg-zinc-800 text-zinc-300 rounded-xl mt-2 h-8 hover:cursor-pointer hover:bg-zinc-300
                    hover:text-zinc-800 hover:border hover:border-zinc-800 duration-300"
                onClick={handleSendEmail}>
                Send Email
            </button>
        </Auth>
    );
}