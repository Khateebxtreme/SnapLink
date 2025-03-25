//for secure pages that can only be accessed after user authentication like dashboard, if user is not authenticated, he will be redirected to login page

import { useStoreContext } from "./contextAPI/ContextAPI";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({children, publicPage}){
  const {token} = useStoreContext(); //lets us know if the user is authenticated

  if(publicPage){
    return token ? <Navigate to="/dashboard"/> : children;
  }

  return !token ? <Navigate to="/register" /> : children;
}