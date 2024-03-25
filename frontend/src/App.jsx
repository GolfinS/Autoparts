import './App.css'
import FirstPage from './Components/FirstPage/FirstPage'
import HomePage from './Components/HomePage/HomePage'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'

// Import React Router Dom
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><FirstPage/></div>
  },
  {
    path: '/login',
    element: <div><Login/></div>
  },
  {
    path: '/register',
    element: <div><Register/></div>
  },
  {
    path: '/HomePage',
    element: <div><HomePage/></div>
  },
])

function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
