import { useEffect, useState } from "react";

import axios from "axios";

export function useHome(){
    const url ="https://64e7ab01b0fd9648b7903ce3.mockapi.io/usuarios/usuarios"

    const [users, setUsers ] = useState([])
  
    const fetUsers = async()=>{
      const users = await axios.get(url)
      setUsers(users.data)
  
    }
  
    useEffect(()=>{
      fetUsers()
    }, [])
    

    return {users};
}