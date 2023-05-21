import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Main from './components/Main/Main';
import PrivateRoute from './components/PrivateRoutes/PrivateRoute';
import Login from './components/Login/Login';
import Toys from './components/Toys/Toys';
import ViewDetails from './components/Toys/ViewDetails';
import MyToys from './components/Toys/MyToys';
import AddToys from './components/Toys/AddToys';
import Register from './components/Register/Register';
import AuthProviders from './components/Providers/AuthProvider';
import Blogs from './components/Blogs/Blogs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Main></Main>
      },
      {
        path: '/all-toys',
        element: <Toys></Toys>,
        children: [
          {
            path: '/all-toys/:id',
            element: <PrivateRoute><ViewDetails path={'/login'} data={true}></ViewDetails></PrivateRoute>,
            loader: ({ params }) => fetch(`https://toy-marketplace-server-psi.vercel.app/all-toys/${params.id}`)
          }
        ]
      },
      {
        path: '/my-toys',
        element: <PrivateRoute><MyToys path={'/login'} data={true}></MyToys></PrivateRoute>
      },
      {
        path: '/add-toy',
        element: <PrivateRoute><AddToys path={'/login'} data={true}></AddToys></PrivateRoute>
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
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
      <div className='bg-[#e9f8ff]'>
        
      </div>
    </AuthProviders>
  </React.StrictMode>,
)
