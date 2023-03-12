import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom"

const Register = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: ""
  })

  const handleChange = e => {
    const {name, value} = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  function handleClick() {
    navigate("/Login")
  }

  const register = () =>{
    const {name, email, password, reEnterPassword } = user
    if(name && email && password && password === reEnterPassword){      
      axios.post("http://localhost:9002/register", user)
      .then(res => alert(res.data.message))
      navigate("/Login")
    } else {
      alert("Invalid Input")
    }
  }

  return (
    <>
      <form className="register items-center m-auto">
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} placeholder="Enter your Name" onChange={handleChange}></input>
        <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
        <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange}></input>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
        <div className="button" onClick={() => {register(); handleClick();}}>Register</div>
      </form>
    </>
  )
}

export default Register
