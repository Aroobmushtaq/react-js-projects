import React from 'react';
import { useState, useContext } from 'react';
import UserContext from './userContext';

function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(UserContext);

    const handlesubmit = (e) => {
        e.preventDefault();
        setUser({ name, password });
    };

    return (
        <div className="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <button
                onClick={handlesubmit}
                className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Submit
            </button>
        </div>
    );
}

export default Login;
