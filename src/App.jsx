import { useState } from 'react'
import axios from 'axios'
import './App.css'
import UsersForm from './components/UsersForm'
import { useEffect } from 'react'
import UsersList from './components/UsersList'

function App() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState(null)


  useEffect(() => {
    axios
      .get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  }, [])
  
  const getUsers = () => {
    axios
    .get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data))
  }
  const selectedUser = (user) => {
    setUser(user)
  }
  

  // const deleteCar =(id)=>{
  //   axios.delete(`https://cars-crud.herokuapp.com/cars/${id}/`)
  //   getUsers()
  // }
  const deselectUser = () => setUser(null)
  console.log(user);
  return (
    <div className="App">
      <UsersForm getUsers={getUsers} user={user} deselectUser={deselectUser} />
      <UsersList selectedUser={selectedUser} users={users} getUsers={getUsers} />
    </div>
  )
}

export default App
