import {Button} from "../../../../common/Button.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faIdCard} from "@fortawesome/free-solid-svg-icons";

export function MainTitle({role, subText}) {
    return (
        <div className="w-full h-1/10 bg-stone-100 rounded-lg shadow-xl flex">
            <div className="h-full w-5/7 py-2 px-4">
                <h1 className="font-bold font-2xl">Dashboard {role}</h1>
                <p className="text-stone-500">{subText}</p>
            </div>
            <div className="h-full w-2/7 flex items-center justify-end px-6">
                <Button
                    className="bg-stone-300 px-5 py-2 rounded-2xl hover:bg-stone-400 transition duration-300"
                    btnText="Bolba-Mateescu Andrei"
                    onClick={() => {
                        console.log("click")
                    }}>
                    <FontAwesomeIcon icon={faIdCard} className="mr-2"/>
                </Button>
            </div>
        </div>
    );
}