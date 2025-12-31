import {Button} from "../common/Button.jsx";
import {useRef} from "react";
import {Modal} from "../modal/ProfileModal.jsx";

export function ProfileTitle() {
    const modal = useRef();

    function onEditButton() {
        modal.current.open()
    }

    return (
        <>
            <Modal ref={modal} title="Edit user"/>
            <div className="w-full h-5/20 bg-slate-900 rounded-xl shadow-lg p-10 flex items-center gap-4">
                <div className="w-30 h-30 bg-user bg-cover rounded-full"/>

                <div className="w-full h-full px-4 flex flex-col justify-center gap-2">
                    <h1 className="font-bold text-xl text-slate-200">
                        Bolba-Mateescu Andrei
                    </h1>
                    <p className="text-md text-slate-500">
                        andrei.bolba@yahoo.com
                    </p>

                    <div className="flex gap-2 items-center">
                        <div className="px-3 py-1 rounded-full bg-white/20 text-xs text-slate-200">
                            Administrator
                        </div>

                        <div className="px-3 py-1 rounded-full bg-green-600/80 text-xs text-white">
                            Active account
                        </div>

                        <Button
                            btnText="Edit"
                            className="px-3 py-1 rounded-full bg-slate-700 text-white text-xs font-medium hover:bg-indigo-700 transition"
                            onClick={onEditButton}/>
                    </div>
                </div>
            </div>
        </>
    );
}