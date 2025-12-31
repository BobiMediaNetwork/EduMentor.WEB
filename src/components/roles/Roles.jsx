import {MainScreen} from "../screen/MainScreen.jsx";
import {ButtonWithIcon} from "../common/ButtonWithIcon.jsx";
import {faEdit, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export function Roles() {
    const roles = [
        {id: 1, name: "Administrator"},
        {id: 2, name: "Teacher"},
        {id: 3, name: "Student"},
        {id: 4, name: "Parent"},
        {id: 1, name: "Administrator"},
        {id: 2, name: "Teacher"},
        {id: 3, name: "Student"},
        {id: 4, name: "Parent"},
        {id: 4, name: "Parent"},
    ];

    return (
        <MainScreen>
            <div className="h-full w-full bg-white rounded-2xl flex flex-col shadow-xl">
                <div className="w-full h-1/10 flex items-center justify-between">
                    <div className="pl-4 font-semibold text-lg text-stone-700">
                        Roles administration
                    </div>
                    <div className="pr-4 flex items-center">
                        <ButtonWithIcon buttonName="Add role" icon={faPlus} hasColor/>
                    </div>
                </div>
                <div className="flex-1 p-6">
                    <div className="h-full w-full bg-slate-900 rounded-2xl overflow-hidden">
                        <div
                            className="grid grid-cols-12 px-6 py-3 text-xs uppercase tracking-wider text-slate-400 border-b border-slate-800">
                            <div className="col-span-1">ID</div>
                            <div className="col-span-8">Role name</div>
                            <div className="col-span-3 text-right">Actions</div>
                        </div>

                        <div className="divide-y divide-slate-800">
                            {roles.map((item) => (
                                <div
                                    key={item.id}
                                    className="grid grid-cols-12 px-6 py-2.5 items-center text-sm text-slate-200 hover:bg-slate-800/60 transition"
                                >
                                    <div className="col-span-1 text-slate-400">
                                        #{item.id}
                                    </div>

                                    <div className="col-span-8 font-medium">
                                        {item.name}
                                    </div>

                                    <div className="col-span-3 flex justify-end gap-2">
                                        <button
                                            className="px-2 py-1 rounded-md bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500 hover:text-white transition">
                                            <FontAwesomeIcon icon={faEdit}/>
                                        </button>

                                        <button
                                            className="px-2 py-1 rounded-md bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition">
                                            <FontAwesomeIcon icon={faTrash}/>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {roles.length > 8 && (<div
                            className="h-9 px-6 flex items-end justify-between border-t border-slate-800 text-sm text-slate-400">
                            <span>Showing 1–4 of 12 roles</span>

                            <div className="flex gap-2">
                                <button className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700">
                                    Prev
                                </button>
                                <button className="px-3 py-1 rounded-lg bg-indigo-600 text-white">
                                    1
                                </button>
                                <button className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700">
                                    2
                                </button>
                                <button className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700">
                                    Next
                                </button>
                            </div>
                        </div>)}

                    </div>
                </div>
            </div>
        </MainScreen>
    );
}
