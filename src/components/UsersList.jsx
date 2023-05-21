import React, { useState } from 'react';
import axios from 'axios'

const UsersList = ({setNameForm, users, selectedUser, getUsers, url, setForm }) => {
    const [isDelete, setIsDelete] = useState(false)
    const [userDelete, setUserDelete] = useState("")
    
    const deleteUser = (user) => {
        axios.delete(`${url}${user.id}`)
        .then(()=> getUsers())
        setUserDelete(`${user.first_name} ${user.last_name}`)
    }

    return (
        <div className='users'>
            <ul className='container-users'>
                {
                    users.map(user => {
                        return (
                            <li className='user' key={user.id}>
                                <h3 className='title-user'>{user.first_name} {user.last_name}</h3>
                                <div className='user-info'>
                                    <span>EMAIL</span>
                                    <small>{user.email} </small>
                                </div>
                                <div className='user-info'>
                                    <span>BIRTHDAY</span>
                                    <div>
                                    <span className="material-symbols-outlined">redeem</span>
                                    <small> {user.birthday}</small>
                                    </div>
                                </div>
                                <div className='buttons-user'>
                                <button className='edit-btn btn_user' onClick={() => {
                                    selectedUser(user)
                                    setNameForm("Update User")
                                    setForm(true)
                                }}>
                                    <span className="material-symbols-outlined">
                                    edit
                                    </span>
                                </button>
                                <button className='container-delete btn_user container-delete_user' onClick={()=>{
                                    setIsDelete(true)
                                    deleteUser(user)
                                    }}>
                                    <span className="material-symbols-outlined">
                                    delete
                                    </span>
                                </button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            {
                isDelete && (
                    <div className='container'>
                        <div className='card'>
                            <h2 className='title-form'>Delete User</h2>
                            <p>The user <b>{userDelete}</b> was succesfully deleted.</p>
                            <button className='btn' onClick={()=>setIsDelete(false)}>Ok</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default UsersList;