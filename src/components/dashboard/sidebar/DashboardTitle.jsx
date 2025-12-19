import logoIcon from '../../../assets/logo/icon.png'

export function DashboardTitle() {
    return (
        <div className="h-1/10 w-full flex pl-5 items-center text-2xl font-bold border-b border-slate-700 text-slate-200 gap-1">
            <img src={logoIcon} alt="Logo" className="h-5 w-5 rounded-md" />
            EduMentor
        </div>
    )
}