import React from "react"

import { useState } from "react"
import "../components/css/Register.css"

const Register = ({ type }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", { type, email, password, name })
    
  }

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>{type === "signup" ? "Create Account" : "Log In"}</h2>
        <form onSubmit={handleSubmit}>
          {type === "signup" && (
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
          )}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            {type === "signup" ? "Sign Up" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register;
