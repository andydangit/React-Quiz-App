import React from 'react'
import {Link} from 'react-router-dom'

function Card( user ) {
    return (
        <div>
            <Link to={`/user/${user.id}`}> {user.name} </Link>
        </div>
    )
}

export default Card
