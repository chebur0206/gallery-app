import React from 'react';
import './User.css'
import { Link } from 'react-router-dom'

const User = ({ name, email, city, username, id }) => {
    return (
        <div className='user__wraper' >
            <p className='user__title'>Name: {name}</p>
            <p className='user__title'>Username: {username}</p>
            <p className='user__title'>
                Email: <a href={email} > {email}</a>
            </p>
            <p className='user__title'>City: {city}</p>
            <Link to={`/users/${id}/albums`} className='accept__btn' >Choose</Link>
        </div >

    )
};

export default User;