import React from "react";
import { useContext } from "react";
import { userContext } from "../context/AuthContext";
import { useNavigate } from "react-router";


const Navbar = () => {

      let Navigate=useNavigate()

    let { user, setUser } = useContext(userContext)


     let  handleClick=()=>{
        Navigate("/cart")
      }


    return (
        <nav className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">{user.email}</h1>
                  <button onClick={handleClick}>Cart</button>
            </div>
        </nav>
    );
};

export default Navbar;