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
                            {index: 0, key: "Full Name", value: "Bolba-Mateescu Andrei"},
                            {index: 1, key: "Email", value: "andrei_bolba@yahoo.com"},
                            {index: 2, key: "Phone", value: "+40 712 345 678"},
                            {index: 3, key: "Role", value: "Administrator"}
                        ]}/>
                        <ProfileCard title="Security" lines={[
                            {index: 0, key: "Password", value: "Change Password"},
                            {index: 1, key: "Two Factor Auth", value: "Active"},
                            {index: 2, key: "Last LogIn", value: "Today, 09:42"}
                        ]}/>
                        <ProfileCard title="Account" lines={[
                            {index: 0, key: "Account State", value: "Active"},
                            {index: 1, key: "Account Type", value: "Standard"},
                            {index: 2, key: "Access", value: "Complete"},
                            {index: 3, key: "Created at", value: "12-Sep-25"}
                        ]}/>
                    </div>
                    <div className="h-1/2 w-full flex gap-6">
                        <ProfileCard title="School" lines={[
                            {index: 0, key: "School", value: "School Nr 1"},
                            {index: 1, key: "City", value: "Brasov"},
                            {index: 2, key: "School Year", value: "2026-2027"}
                        ]}/>
                        <ProfileCard title="Personal Preferences" lines={[
                            {index: 0, key: "Language", value: "English"},
                            {index: 1, key: "Theme", value: "Light"},
                            {index: 2, key: "Date Format", value: "DD-MMM-YY"}
                        ]}/>
                        <ProfileCard title="Coming Soon" lines={[
                            {index: 0, key: "Field1", value: "Value1"},
                            {index: 1, key: "Field2", value: "Value2"},
                            {index: 2, key: "Field3", value: "Value3"}
                        ]}/>
                    </div>
                </div>
            </div>
        </MainScreen>
    );
}