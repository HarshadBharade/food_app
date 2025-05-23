
import Login from './Auth/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './MainLayout'
import Signup from './Auth/Signup'
import ForgotPassword from './Auth/ForgotPassword'
import ResetPassword from './Auth/ResetPassword'


const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    // children:[
    //   {
    //     path: "/login"
    //   }
    // ]
  },
  {
    path: "/login",
    element:<Login />
  },
  {
    path: "/signup",
    element:<Signup />
  },
  {
    path: "/forgot-password",
    element:<ForgotPassword />
  },
  {
    path: "/reset-password",
    element:<ResetPassword />
  }
])
function App() {

  return (
   <main>
    <RouterProvider router={appRouter}></RouterProvider>
   </main>
  )
}

export default App
