import React from 'react'
const User = (props) => {
    const { data } = props
    return (
        <div>
            <h1>User Component</h1>
            <h1>{data.name}</h1>
            <h1>{data.age}</h1>
        </div>
    )
}

export default User
