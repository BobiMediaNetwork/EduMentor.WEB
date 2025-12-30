import {MainScreen} from "../screen/MainScreen.jsx";
import {ProfileCard} from "./ProfileCard.jsx";
import {ProfileTitle} from "./ProfileTitle.jsx";

export function Profile() {
    return (
        <MainScreen>
            <div className="h-full w-full rounded-xl p-3 flex flex-col gap-4">
                <ProfileTitle/>
                <div className="h-15/20 w-full rounded-xl flex flex-col items-center gap-6">
                    <div className="h-1/2 w-full flex gap-6">
                        <ProfileCard title="Personal Information" lines={[
                            {key: "Full Name", value: "Bolba-Mateescu Andrei"},
                            {key: "Email", value: "andrei_bolba@yahoo.com"},
                            {key: "Phone", value: "+40 712 345 678"},
                            {key: "Role", value: "Administrator"}
                        ]}/>
                        <ProfileCard title="Security" lines={[
                            {key: "Password", value: "Change Password"},
                            {key: "Two Factor Auth", value: "Active"},
                            {key: "Last LogIn", value: "Today, 09:42"}
                        ]}/>
                        <ProfileCard title="Account" lines={[
                            {key: "Account State", value: "Active"},
                            {key: "Account Type", value: "Standard"},
                            {key: "Access", value: "Complete"},
                            {key: "Created at", value: "12-Sep-25"}
                        ]}/>
                    </div>
                    <div className="h-1/2 w-full flex gap-6">
                        <ProfileCard title="School" lines={[
                            {key: "School", value: "School Nr 1"},
                            {key: "City", value: "Brasov"},
                            {key: "School Year", value: "2026-2027"}
                        ]}/>
                        <ProfileCard title="Personal Preferences" lines={[
                            {key: "Language", value: "English"},
                            {key: "Theme", value: "Light"},
                            {key: "Date Format", value: "DD-MMM-YY"}
                        ]}/>
                        <ProfileCard title="Coming Soon" lines={[
                            {key: "Field1", value: "Value1"},
                            {key: "Field2", value: "Value2"},
                            {key: "Field3", value: "Value3"}
                        ]}/>
                    </div>
                </div>
            </div>
        </MainScreen>
    );
}