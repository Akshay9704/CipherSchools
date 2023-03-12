import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Login = ({setLoginUser}) => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""   
  })

  const handleChange = e => {
    const {name, value} = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  function handleClickR() {
    navigate("/Register")
  }


  const login = () =>{
    axios.post("http://localhost:9002/login", user)
    .then(res => {
      alert(res.data.message)
      setLoginUser(res.data.user)
      navigate("/Showcase")
    })
  }

  return (
    <>
      <form className="login items-center m-auto">
        <h1>Login</h1>
        <input type="text" name="email" value={user.email} autoComplete="email"  onChange={handleChange} placeholder="Enter your Email"></input>
        <input type="password" name="password" value={user.password} autoComplete="current-password" onChange={handleChange} placeholder="Enter your Password"></input>
        <div className="button" onClick={login}>Login</div>
        <div className="button" onClick={handleClickR}>Register</div>
      </form>
    </>
  )
}

export default Login
