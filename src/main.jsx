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
import Toys from './components/Toys/Toys';
import ViewDetails from './components/Toys/ViewDetails';
import MyToys from './components/Toys/MyToys';
import AddToys from './components/Toys/AddToys';
import Register from './components/Register/Register';
import AuthProviders from './components/Providers/AuthProvider';


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
        path: '/toys',
        element: <Toys></Toys>,
        children: [
          {
            path: '/toys/:id',
            element: <PrivateRoute><ViewDetails path={'/login'} data={true}></ViewDetails></PrivateRoute>,
            loader: ({ params }) => fetch(`https://cute-gold-lemming-sari.cyclic.app/all-toys/${params.id}`)
          }
        ]
      },
      {
        path: '/mytoys',
        element: <PrivateRoute><MyToys path={'/login'} data={true}></MyToys></PrivateRoute>
      },
      {
        path: '/addtoy',
        element: <PrivateRoute><AddToys path={'/login'} data={true}></AddToys></PrivateRoute>
      },
      {
        path: '/blog'
      },
      {
        path: '/login',
        element: <PrivateRoute><Login path={'/'} data={false}></Login></PrivateRoute>
      },
      {
        path: '/register',
        element: <PrivateRoute><Register path={'/'} data={false}></Register></PrivateRoute>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
