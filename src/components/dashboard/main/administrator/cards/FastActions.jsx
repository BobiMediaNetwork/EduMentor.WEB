import {DashboardMainDetails} from "../../../../common/DashboardMainDetails.jsx";
import {Button} from "../../../../common/Button.jsx";

export function FastAction(){
    const btnClassName = "h-full w-1/2 bg-indigo-500 text-stone-200 rounded-lg shadow-sm";
    const divClassName = "w-full h-1/2 flex gap-3 p-2";
    return (
        <DashboardMainDetails
            className="w-full h-1/3 bg-stone-100 shadow-xl rounded-2xl flex flex-col"
            title="Fast Actions">
            <div className="w-full h-full flex flex-col">
                <div className={divClassName}>
                    <Button btnText="Add Student" className={btnClassName} onClick={()=>{console.log("Add Student")}}/>
                    <Button btnText="Add Parent" className={btnClassName} onClick={()=>{console.log("Add Student")}}/>
                </div>
                <div className={divClassName}>
                    <Button btnText="Add Teacher" className={btnClassName} onClick={()=>{console.log("Add Student")}}/>
                    <Button btnText="Add Grade" className={btnClassName} onClick={()=>{console.log("Add Student")}}/>
                </div>
            </div>
        </DashboardMainDetails>
    );
}