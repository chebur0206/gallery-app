import React, { Fragment, useEffect, useState } from 'react';
import User from '../../components/User';
import './Users.css';

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => setUsers(result))
    }, [])

    return (
        <Fragment>
            <h1 style={{ textAlign: "center" }}>Users:</h1>
            <div className='users__wraper'>
                {users.map(item => (
                    <div key={item.id}>
                        <User
                            id={item.id}
                            name={item.name}
                            username={item.username}
                            email={item.email}
                            city={item.address.city}
                        />
                    </div>
                ))}
            </div>
        </Fragment>
    )
};

export default Users;