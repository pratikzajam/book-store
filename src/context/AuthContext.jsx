import { createContext, useState } from "react";



export let authContext = createContext();
export let userContext = createContext()



export let AuthProvider = ({ children }) => {

  const [auth, setStatus] = useState(false)
  let ChangeAuthStatus = () => setStatus(!auth);
  return <authContext.Provider value={{ ChangeAuthStatus, auth }}>{children}</authContext.Provider>


}

export let UserProvider = ({ children }) => {

  const [user, setUser] = useState({ email: "", password: "" })

  return <userContext.Provider value={{ user, setUser }}>{children}</userContext.Provider>

}