import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import {Button} from "../../common/Button.jsx";

export function LogOut(){
    return (
        <Button
            className="h-1/10 w-full pl-4 flex items-center text-white p-4 border-t border-slate-700 text-sm gap-2 hover:bg-slate-800 transition duration-200"
            btnText="Logout"
        >
            <FontAwesomeIcon icon={faLock}/>
        </Button>
    )
}