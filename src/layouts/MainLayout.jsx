import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function Layout({ children }) {
  return (
    <div className="flex bg-white dark:bg-gray-200">
      <Sidebar />
      <div className="main-content flex-1">
        <Navbar />
        <div className="mt-16 p-5">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout