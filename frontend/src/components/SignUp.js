import React, { useEffect, useState } from "react"

function SignUp({ handleLogin }) {
    const [readerInfo, setReaderInfo] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
    })

    const handleReaderInfoChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setReaderInfo({...readerInfo, [name]: value})
    }

    const handleSignUpSubmit = (e) => {
        e.preventDefault()
        fetch("/signup", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(readerInfo)
        })
        .then(resp => resp.json())
        .then(newReader => handleLogin(newReader))
    }

    return (
        <div className="container">
            <h3>Sign Up</h3>
            <form name="sign-up" onSubmit={handleSignUpSubmit}>
                <div className="form-group">
                    <label>First Name: </label>
                    <input
                        value={readerInfo.first_name}
                        onChange={handleReaderInfoChange}
                        type="text"
                        autoComplete="off"
                        className="input-field"
                        id="create-input-field"
                        placeholder="First name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input
                        value={readerInfo.last_name}
                        onChange={handleReaderInfoChange}
                        type="text"
                        autoComplete="off"
                        className="input-field"
                        id="create-input-field"
                        placeholder="Last name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Username: </label>
                    <input
                        value={readerInfo.username}
                        onChange={handleReaderInfoChange}
                        type="text"
                        autoComplete="off"
                        className="input-field"
                        id="create-input-field"
                        placeholder="Enter username"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input
                        value={readerInfo.email}
                        onChange={(e) => setReaderInfo(e.target.value)}
                        type="text"
                        autoComplete="off"
                        className="input-field"
                        id="create-input-field"
                        placeholder="Enter email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input
                        value={readerInfo.password}
                        onChange={(e) => setReaderInfo(e.target.value)}
                        type="text"
                        autoComplete="off"
                        className="input-field"
                        id="create-input-field"
                        placeholder="password"
                        required
                    />
                </div>
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp