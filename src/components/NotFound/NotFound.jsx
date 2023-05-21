import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div className="grid place-content-center h-screen" >
            
            <img src="../../../public/404.png"/>
            <Link to={'/'} className="btn text-center w-fit mx-auto bg-[#ED1C24] hover:bg-red-500 border-none">Go back</Link>
        </div>
       

    )
}