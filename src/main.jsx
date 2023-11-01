import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import ErrorPage from './Component/Root/ErrorPage.jsx';
import Home from './Component/Layout/Home/Home.jsx';
import Login from './Component/Layout/BodyPages/SigningPages/Login.jsx';
import AddProduct from './Component/Layout/BodyPages/AddProduct/AddProduct.jsx';
import { AuthProvider } from './Component/AuthProvider/AuthProvider.jsx';
import SignUp from './Component/Layout/BodyPages/SigningPages/SignUp';
import PrivateRoute from './Component/Root/PrivateRoute';
import BrandsPage from './Component/Layout/BodyPages/BrandsPage/BrandsPage';
import CarDetail from './Component/Layout/BodyPages/BrandsPage/CarDetail/CarDetail';
import UpdateProduct from './Component/Layout/BodyPages/UpdateProduct/UpdateProduct';
import Cart from './Component/Layout/BodyPages/MyCart/Cart';
// import CarDetail from './Component/Layout/BodyPages/BrandsPage/CarDetail';
// import CarCards from './Component/Layout/BodyPages/CarSection/CarCards';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://brand-shop-server-nu.vercel.app/brands')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: '/addproduct',
        element: <PrivateRoute>
          <AddProduct></AddProduct>
        </PrivateRoute>
      },
      {
        path: "/cars/:brand",
        element: <PrivateRoute>
          <BrandsPage></BrandsPage>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://brand-shop-server-nu.vercel.app/cars/${params.brand}`),
      },
      {
        path: '/detail/:id',
        element: <PrivateRoute>
          <CarDetail></CarDetail>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://brand-shop-server-nu.vercel.app/detail/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <PrivateRoute>
          <UpdateProduct></UpdateProduct>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://brand-shop-server-nu.vercel.app/detail/${params.id}`)
      },
      {
        path:'/cart',
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
        
      }

    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
