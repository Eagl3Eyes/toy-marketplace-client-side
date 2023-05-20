import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { authContext } from "../Providers/AuthProvider"



export default function PrivateRoute({children}){

    const {user,loading} = useContext(authContext)
    const location = useLocation()

    if(!loading){
        if(user){
            return (children.props.data)?  children :<Navigate to={children.props.path} replace={true}></Navigate>
        }else{
            return (children.props.data)?  <Navigate to={children.props.path} state={{from : location}} replace={true}></Navigate> : children;
        }
    }
}