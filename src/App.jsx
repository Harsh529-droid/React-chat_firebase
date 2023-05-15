import React, { useContext } from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import './style.scss'
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import { AuthContext } from './Context/AuthContext'

const App = () => {

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }

    return children; //this line will help new registered user to get directed towards homepage
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>


          <Route index element={    //if not logged in, redirect to login page
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />

          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App