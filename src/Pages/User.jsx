import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function User() {

    const {userId} = useParams();
    const [user, setUser] = useState([])

    useEffect(() => {
        const getUser = async () => {
            const res = await axios.get(`https://react-quiz-app-json.netlify.app/db.json/${userId}`)
            console.log(res.data);
            setUser(res.data)
        }
        getUser();
    },[userId])

    return (
        <div>
            <p> {user.answer} </p> 
            
        </div>
    )
}

export default User
