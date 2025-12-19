export function DashboardMainDetails({className, title, children}) {
    return (
        <div className={"p-6 " + className}>
            <h1 className="font-bold text-md">{title}</h1>
            {children}
        </div>
    )
}