import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Welcome from './pages/Welcome'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />
    },
    {
      path: "/home",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App