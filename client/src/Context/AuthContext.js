import { createContext,useEffect,useState } from "react";
import axios from '../axios'
import Swal from "sweetalert2";
export const AuthContext = createContext();
export const AuthContextProvider=({children})=>{

   const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
    const token=localStorage.getItem('accessToken') || null 
    const [reload,setReload]=useState(false);

    
    const login =async(data)=>{
        await axios.post('/auth/login',data).then((res)=>{
            setCurrentUser(res.data);
            localStorage.setItem('accessToken',res.data.accessToken);
           
        }).catch((err)=>{
            Swal.fire({
                icon: 'error',
                text: 'invalid credentials',
                
              })
        })
    };

   

    useEffect(()=>{
        if(currentUser != undefined){
            localStorage.setItem('user',JSON.stringify(currentUser))
        }
    },[currentUser]);
    

    return(
        <AuthContext.Provider value={{currentUser,login,setCurrentUser,token,reload,setReload}}>
        {children}
        </AuthContext.Provider>
    )


}