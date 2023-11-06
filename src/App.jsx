import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import About from "./pages/About"
import Contact from "./pages/Contact"
import HomePage from "./pages/HomePage"
import Photo from "./pages/Photo"
import Likedphotos from "./pages/Likedphotos"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { useDispatch } from "react-redux"
import { addUser } from "./redux/features/unsplashSlice"
import {auth} from './firebase/firebaseconfig'




function App() {
  const dispatch = useDispatch()
  const routes = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        index: true ,
        element:<HomePage/>
      },
      {
        path:"home",
        element:<HomePage/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"/:id",
        element:<Photo/>
      },
      {
        path:'likedphotos',
        element:<Likedphotos/>
      }
      
    ]
  },

])
useEffect(()=>{
   onAuthStateChanged(auth , (user)=>{
    if(user){
      console.log(user);
     dispatch(addUser(user))
    }
   })
},[])


  return  <RouterProvider router={routes}/>
}

export default App