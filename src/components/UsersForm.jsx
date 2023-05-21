import React from 'react';
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useEffect } from 'react';

const UsersForm = ({nameForm, setNameForm, setForm, form, getUsers, user, deselectUser, url}) => {
    
    const {register, handleSubmit, reset} = useForm ()
    useEffect(()=>{
        if(user){
            reset(user)
        }
    },[user])

    

    const submit = data =>{
        if(user){
            axios
            .put(`${url}${data.id}/`, data)
            .then(()=>getUsers())
            .catch((error) => console.log(error.response));
        }else{
        axios.post(url, data)
        .then(()=> getUsers())
        .catch(error=> console.log(error.response, user))
        }
        clear()
    }

    const clear=()=>{
        reset({
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            birthday: ""
        })
        deselectUser()
      }
    
    return (
        <div className='container'>
        <form className='card' onSubmit={handleSubmit(submit)}>
            <button className='btn_input' onClick={() => {
                clear()
                setNameForm("New User")
                setForm(false)           
            }}><span class="material-symbols-outlined">
            close
            </span></button>
            <h2 className='title-form'>{nameForm}</h2>
            <div className='info'>
            <div>
                <label className='label' htmlFor="email"> Email</label>
                <input className='input_form' type="email" id='email' {...register('email')}  required/>
            </div>
            <div>
                <label className='label' htmlFor="password">Password</label>
                <input className='input_form' type="text" id='password' {...register('password')} required/>
            </div>
            <div>
                <label className='label' htmlFor="first_name">First Name</label>
                <input className='input_form' type="text" id='first_name' {...register('first_name')} required/>
            </div>
            <div>
                <label className='label' htmlFor="last_name">Last Name</label>
                <input className='input_form' type="text" id='last_name' {...register('last_name')} required/>
            </div>
            <div>
                <label className='label' htmlFor="birthday">Birthday</label>
                <input className='input_form' type="date" id='birthday' {...register('birthday')} required/>
            </div>
            </div>
            <div className="buttons">
            <button className='user-button btn' >Add New User</button>
            <button className='container-delete' onClick={clear}><span class="delete-btn material-symbols-outlined">
delete
</span></button>
            </div>
        </form>
        </div>
    );
};

export default UsersForm;