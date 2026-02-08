import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../utils/Auth"

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [holat, setHolat] = useState('')

  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault()
    const success = login(username, password)
    if (success) {
      navigate("/")
    } else {
      setHolat("Login yoki parol xato")
      setPassword("")
      setUsername("")
    }
  }

  return (
    <div className='login_container'>
      <div className='bg-white p-8 rounded-xl shadow'>
        <h2 className='text-2xl font-bold text-center mb-6'>Login Page</h2>
        <form action="" className='flex flex-col gap-4' onSubmit={handleLogin}>
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

          <button className='bg-blue-500 text-white p-2 rounded-lg'>Login</button>
          <p className='text-gray-700 text-center'>Do you have an account? <a className='text-blue-600' href="/register">Register</a></p>
          <p className="text-red-500 text-center">{holat}</p>
        </form>
      </div>
			<div>
				<img src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-login_516790-1261.jpg" className='w-full h-full object-cover rounded-3xl' alt="" />
			</div>
    </div>
  )
}

export default Login