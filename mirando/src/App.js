import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthContextProvider } from './context/AuthContext'
import Account from './pages/Account'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <>
    <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LogIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/account' element={
            <ProtectedRoute>
              <Account/>
            </ProtectedRoute>
        } />
      </Routes>
    </AuthContextProvider>
    </>
  )
}

export default App