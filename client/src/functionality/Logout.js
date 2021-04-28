import React , {useState} from 'react'
import { useAuth } from '../contexts/AuthContext';
import { Link , useHistory} from 'react-router-dom'
function Logout() {
    const [error,setError] = useState("");
    const {currentUser , logout} = useAuth()
    const history = useHistory()
    async function handleLogout(){
      setError("")
  
      try {
          await logout()
          history.push('/login')
      }catch{
          setError('Failed to LogOut')
      }
    }
    return (
        <div>
            <a onClick={handleLogout}></a>
        </div>
    )
}

export default Logout
