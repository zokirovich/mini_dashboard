import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className=' sidebar'>
      <h2 className=' text-xl text-white'>
        Mini Dashboard
        </h2>
        <div className="bg-gray-650 text-white px-4 py-2 rounded        hover:bg-gray-800"><Link to='/'>
          Dashboard
          </Link>
        </div>
        <div className=' bg-gray-650 text-white px-4 rounded hover:bg-gray-800'><Link to='/users'>
        Users
        </Link></div>
        <div className=' bg-gray-650 text-white px-4 rounded hover:bg-gray-800'><Link to='/products'>
        Products
        </Link></div>
        <div className=' bg-gray-650 text-white px-4 rounded hover:bg-gray-800'><Link to='/orders'>
        Orders
        </Link></div>
        <div className=' bg-gray-650 text-white px-4 rounded hover:bg-gray-800'><Link to='/settings'>
        Settings
        </Link></div>
    </div>
  )
}

export default Sidebar