import React from 'react';
import { useState } from 'react';
import { authContext,userContext } from '../context/AuthContext';
import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router';


const Login = () => {


    let Navigate=useNavigate()


    let { ChangeAuthStatus, auth } = useContext(authContext)
   
    let { user, setUser } = useContext(userContext)

    console.log(auth)

    let [data, setData] = useState({ email: "", password: "" })

    let HandleSubmit = () => {

        event.preventDefault();

        if (data.email == "test@gmail.com" && data.password == "1234") {
            alert("Login sucessful");


            setUser({email:data.email,password:data.password})
            console.log(user)
            ChangeAuthStatus()

            Navigate('\main')
        } else {
            alert("Wrong password");
        }

    }




    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
                <form onSubmit={() => HandleSubmit(event)}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            onChange={() => setData({ ...data, email: event.target.value })}
                            type="email"
                            className="w-full p-2 border rounded-lg"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            onChange={() => setData({ ...data, password: event.target.value })}
                            type="password"
                            className="w-full p-2 border rounded-lg"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
