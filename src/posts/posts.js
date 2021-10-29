import React from 'react'
import SampleAnswer from '../Data/SampleAnswer.json'

function Posts() {
    return (
        <div>
            {SampleAnswer.map((detail) => {
                return <div> 
                    <h2> {detail.Question} </h2>
                <p>{detail.Answer} </p> 
                </div> 
            })}
        </div>
    )
}

export default Posts
