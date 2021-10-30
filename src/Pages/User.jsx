import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function User() {

    const {userId} = useParams();
    const [user, setUser] = useState([])

    useEffect(() => {
        const getUser = async () => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            setUser(res.data)
        }
        getUser();
    },[userId])

    return (
        <div>
            <p> {user.name} </p> 
            <p> {user.email} </p> 
            
        </div>
    )
}

export default User
