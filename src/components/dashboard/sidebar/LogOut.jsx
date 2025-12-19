import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import {Button} from "../../common/Button.jsx";
import {useNavigate} from "react-router-dom";

export function LogOut(){
    const navigate = useNavigate();

    function handleLogout(){
        navigate("/")
    }
    return (
        <Button
            className="h-1/10 w-full pl-4 flex items-center text-white p-4 border-t border-slate-700 text-sm gap-2 hover:bg-slate-800 transition duration-200"
            btnText="Logout"
            onClick={handleLogout}
        >
            <FontAwesomeIcon icon={faLock}/>
        </Button>
    )
}