import { useState } from 'react'
import axios from 'axios'
import './App.css'
import UsersForm from './components/UsersForm'
import { useEffect } from 'react'
import UsersList from './components/UsersList'

function App() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState(null)
  const [urlApi, setUrlApi] = useState("https://users-crud.academlo.tech/users/")
  const [form, setForm] = useState(false)
  const [nameForm, setNameForm] = useState("Create New User")

  
  const getUsers = () => {
    axios
    .get(urlApi)
    .then(res => setUsers(res.data))
  }


  useEffect(() => {
    getUsers()
  }, [])

  const selectedUser = (user) => {
    setUser(user)
  }
  
  const deselectUser = () => setUser(null)

  return (
    <div className="App">
      <h1 className='title'>Users</h1>
      <button className='new_user-button btn' onClick={()=>{
        setForm(true)
      }}> <span>+ </span> <p>Create New User</p></button>
      {
        form && (
          <UsersForm nameForm={nameForm} setNameForm={setNameForm} form={form} url={urlApi} setForm={setForm} getUsers={getUsers} user={user} deselectUser={deselectUser} />
        )
      }
      <UsersList setNameForm={setNameForm} setForm={setForm} form={form} url={urlApi} selectedUser={selectedUser} users={users} getUsers={getUsers} />
    </div>
  )
}

export default App
