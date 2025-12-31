import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "./Button.jsx";

export function ButtonWithIcon({buttonName, icon, isActive, onClick, hasColor}) {
    let className =
        "text-slate-200 text-md rounded-md " +
        "my-1 w-full px-3 py-2 " +
        "flex items-center " +
        "hover:bg-slate-800";
    if (isActive) {
        className += " bg-indigo-600";
    }

    if (hasColor) {
        className += " bg-indigo-600";
    }
    return (
        <Button btnText={buttonName} onClick={onClick} className={className}>
            <FontAwesomeIcon icon={icon} className="mr-2"/>
        </Button>
    );
}