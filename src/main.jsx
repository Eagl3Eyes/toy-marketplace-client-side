import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import PrivateRoute from './components/PrivateRoutes/PrivateRoute';
import Login from './components/Login/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    children: [
      {
        path: '/',
        element: <Main></Main>
      },
      {
        path: '/alltoys',
        element: <PrivateRoute></PrivateRoute>,
        loader: ({ params }) => fetch(`https://cute-gold-lemming-sari.cyclic.app/all-toys/${params.id}`)
      },
      {
        path: '/login',
        element: <PrivateRoute><Login></Login></PrivateRoute>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
