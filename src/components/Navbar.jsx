import { useNavigate } from 'react-router-dom'
import { getCurrentUser, logout } from '../utils/Auth'

function Navbar() {
  const navigate = useNavigate()
  const user = getCurrentUser()
  return (
    <div className=" navbar">
      <p className='text-gray-700 font-bold text-lg'>Welcome to the site.</p>
      <div>
        <button className='mr-1 bg-slate-700 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded '>{user.firstName}</button>
      <button className='bg-white hover:bg-gray-400 hover:text-white text-black font-bold py-2 px-4 rounded' onClick={() => {
        logout()
        navigate('/login')
      }}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar