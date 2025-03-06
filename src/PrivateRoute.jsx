import { Navigate} from "react-router-dom";
import { useContext } from "react";
import { authContext } from "./context/AuthContext";


    

const Protected = ({children}) => {
  
  let {  auth } = useContext(authContext)

  console.log(auth)


  return auth ? children: <Navigate to="/" />;
};

export default Protected;