import React, { useState } from 'react';

function Task() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const formSubmit = (e) => {
        e.preventDefault();
        if (email === "aroob@gmail.com" && pass === "123") {
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
            }, 3000);
        } else {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={formSubmit} className="bg-white p-6 rounded-lg shadow-md w-80">
            <h1 className="text-2xl font-bold text-gray-700 mb-6">Login Form</h1>
                <input
                    type='email'
                    placeholder='Enter your Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 mb-4 border border-gray-300 rounded"
                />
                <input
                    type='password'
                    placeholder='Enter your Password'
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    className="w-full px-3 py-2 mb-4 border border-gray-300 rounded"
                />
                <button
                    type='submit'
                    className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-300"
                >
                    Log in
                </button>
            </form>
            {success && <p className="mt-4 text-green-800">Welcome Back!</p>}
            {error && <p className="mt-4 text-red-500">Are you a hacker or just forgetful? Try again😁</p>}
        </div>
    );
}

export default Task;
