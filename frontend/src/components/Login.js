import { useState, useEffect } from "react"
import SignUp from "./SignUp"
import { useNavigate } from "react-router-dom"

function Login(){
  const [showLoginForm, setShowLoginForm] = useState(false)

  function handleClickLoginForm() {
    setShowLoginForm(!showLoginForm)
  }

  const [readers, setReaders] = useState([])
  useEffect(() => {
    fetch("/readers")
      .then((resp) => resp.json())
      .then((readers) => setReaders(readers))
  }, [])

    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false))

    function handleLoginSubmit(e){
        e.preventDefault()
        const account = readers.find((reader) => reader.username === username)
            if (account && account.password === password) {
                setAuth(true)
                localStorage.setItem("authenticated", true)
                navigate("/")
            }
        }

return (
    <div className="container">
        <h3>Log In</h3>
        <form name="log-in" onSubmit={handleLoginSubmit}>
        <div className="form-group">
        <label>Username:</label>
            <input
            name="Username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
          name="Password" onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password" />
        </div>

        <button type="submit">Login</button>
        <h4> or create an account! </h4>
        <button onClick={handleClickLoginForm} className="button">
          Sign Up
        </button>
        {showLoginForm ? <SignUp readers={readers} setReaders={setReaders} /> : null}
      </form>
    </div>
)
}


export default Login