import {createPortal} from 'react-dom';
import {forwardRef, useImperativeHandle, useRef, useState} from "react";
import {Button} from "../common/Button.jsx";
import {Input} from "../common/Input.jsx";

export const Modal = forwardRef(function Modal({title}, ref) {
    const dialogRef = useRef();
    const [firstName, setFirstName] = useState('Andrei')
    const [lastName, setLastName] = useState('Bolba')
    const [email, setEmail] = useState('andrei_bolba@yahoo.com')
    const [username, setUsername] = useState('andreibolba')
    const classNameBtn =
        "px-3 py-1 rounded-full text-white text-xs font-medium transition h-6 w-18";

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogRef.current.showModal();
            },
            close() {
                dialogRef.current.close();
            }
        }
    });

    function save() {
        dialogRef.current.close();
    }

    function cancel() {
        dialogRef.current.close();
    }

    return createPortal(
        <dialog ref={dialogRef} className="backdrop:bg-stone-900/90 p-4 rounded-md  mx-auto my-auto h-100 w-80">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-xl font-semibold ">{title}</h1>
                <Input
                    className='mt-4'
                    label="Fisrt Name"
                    placeholder="Fisrt Name" value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}/>
                <Input
                    className='mt-4'
                    label="Last Name"
                    placeholder="Last Name" value={lastName}
                    onChange={(e) => setLastName(e.target.value)}/>
                <Input
                    className='mt-4'
                    label="Username"
                    placeholder="Username" value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                <Input
                    className='mt-4'
                    label="Email"
                    placeholder="Email" value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                <div className="flex items-center gap-2 mt-4">
                    <Button
                        btnText="Save"
                        className={classNameBtn + " bg-green-800/80 hover:bg-green-900"}
                        onClick={save}/>
                    <Button
                        btnText="Cancel"
                        className={classNameBtn + " bg-red-800/80 hover:bg-red-900"}
                        onClick={cancel}/>
                </div>
            </div>
        </dialog>,
        document.getElementById('modal-root'),
    )
});