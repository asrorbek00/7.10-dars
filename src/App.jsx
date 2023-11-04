import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import About from "./pages/About"
import Contact from "./pages/Contact"
import HomePage from "./pages/HomePage"
import Photo from "./pages/Photo"




function App() {

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
      }
    ]
  },
])


  return  <RouterProvider router={routes}/>
}

export default App