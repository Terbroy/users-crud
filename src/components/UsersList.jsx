import React from 'react';
import axios from 'axios'

const UsersList = ({users, selectedUser, getUsers }) => {
    const deleteUser = (id) => {
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}`)
        .then(()=> getUsers())
    }
    return (
        <div className='users'>
            <ul>
                {
                    users.map(user => {
                        return (
                            <li key={user.id}>
                                <h2>{user.first_name}</h2>
                                <small>{user.email} </small>
                                <small> {user.password}</small>
                                <div className='buttons'>
                                <button onClick={() => selectedUser(user)}>Update</button>
                                <button onClick={()=>deleteUser(user.id)}>Delete</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default UsersList;