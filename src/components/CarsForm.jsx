import React from 'react';
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useEffect } from 'react';

const CarsForm = ({getUsers, user, deselectUser}) => {
    const {register, handleSubmit, reset} = useForm ()
    useEffect(()=>{
        if(user){
            reset(user)
        }
    },[user])

    const submit = data =>{
        console.log(data);
        if(user){
            axios
            .put(`https://users-crud1.herokuapp.com/users/${data.id}/`, data)
            .then(()=>getUsers())
            .catch((error) => console.log(error.response));
        }else{
        axios.post('https://users-crud1.herokuapp.com/users/', data)
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
        <form className='card' onSubmit={handleSubmit(submit)}>
            <h1>Users Form</h1>
            <div className='info'>
            <div>
                <label htmlFor="email"> Email</label>
                <input type="email" id='email' {...register('email')}  required/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" id='password' {...register('password')} required/>
            </div>
            <div>
                <label htmlFor="first_name">First Name</label>
                <input type="text" id='first_name' {...register('first_name')} required/>
            </div>
            <div>
                <label htmlFor="last_name">Last Name</label>
                <input type="text" id='last_name' {...register('last_name')} required/>
            </div>
            <div>
                <label htmlFor="birthday">Birthday</label>
                <input type="date" id='birthday' {...register('birthday')} required/>
            </div>
            </div>
            <button>Submit</button>
            <button onClick={clear}>Clear</button>
        </form>
    );
};

export default CarsForm;