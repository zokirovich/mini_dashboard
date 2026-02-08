import React from 'react'
import { register } from "../utils/Auth"

function Register() {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")


  const handleRegister = (e) => {
    e.preventDefault()
    register(firstName, lastName, username, password)
    window.location.href = "/login"
  }
  return (
    <div className='login_container'>
      <div className='bg-white p-8 rounded-xl shadow'>
        <h2 className='text-2xl font-bold text-center mb-6'>Register Page</h2>
        <form action="" className='flex flex-col gap-4' onSubmit={handleRegister}>
          <input
            placeholder='First Name'
            required
            value={firstName}
            className='bg-white p-2 border border-gray-300 rounded min-w-80'
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            placeholder='Last Name'
            required
            value={lastName}
            className='bg-white p-2 border border-gray-300 rounded min-w-80'
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            placeholder="Username"
            required
            value={username}
            className='bg-white p-2 border border-gray-300 rounded min-w-80'
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            className='bg-white p-2 border border-gray-300 rounded min-w-80'
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className='bg-blue-500 text-white p-2 rounded-lg'>Register</button>
          <p className='text-gray-700 text-center'>Already have an account? <a className='text-blue-600' href="/login">Login</a></p>
        </form>
      </div>
			<div>
				<img src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-login_516790-1261.jpg" className='w-full h-full object-cover rounded-3xl' alt="" />
			</div>
    </div>
  )
}

export default Register