import { useContext } from "react";
import React from 'react';
import userContext from "./userContext";

function Profile() {
    const { user } = useContext(userContext);

    if (!user) {
        return (
            <div className="max-w-sm mx-auto p-6 text-center bg-red-100 text-red-700 rounded-lg">
                Please Login
            </div>
        );
    }

    return (
        <div className="max-w-sm mx-auto p-6 text-center bg-green-100 text-green-700 rounded-lg">
            Welcome {user.name}
        </div>
    );
}

export default Profile;
