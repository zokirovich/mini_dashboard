import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

// components
// pages
import Layout from './layouts/MainLayout'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Products from './pages/Products'
import Register from './pages/Register'
import Settings from './pages/Settings'
import Users from './pages/Users'
import PrivateRoute from './routes/PrivateRoute'
function App() {

<div className="bg-red-500 p-4 text-white">
  Tailwind test
</div>
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<PrivateRoute><Layout><Dashboard /></Layout></PrivateRoute>} />
          <Route path='/orders' element={<PrivateRoute><Layout><Orders /></Layout></PrivateRoute>} />
          <Route path='/products' element={<PrivateRoute><Layout><Products /></Layout></PrivateRoute>} />
          <Route path='/settings' element={<PrivateRoute><Layout><Settings /></Layout></PrivateRoute>} />
          <Route path='/users' element={<PrivateRoute><Layout><Users /></Layout></PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
