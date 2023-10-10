import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Blog from './Blog'
import Contact from './Contact'
import Nopage from './Nopage'

const router = createBrowserRouter([
  {
    path:'/',element:<Layout />,
    children: [
      {path: "blog",
    element:<Blog />},
    {path: "contact",
    element:<Contact />},
    {path: "*",
    element:<Nopage />},
    {path: "/",
    element:<Home />}
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router}/>

  )
}

export default App