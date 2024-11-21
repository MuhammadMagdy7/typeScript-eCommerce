import { MainLayout } from '@layouts/index'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Home, Categories, Products, AboutUs, Error} from '@pages/index'

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },{
                path: '/categories',
                element: <Categories />,
            },{
                path: '/products/:prefix',
                element: <Products />,
                loader:({params}) => {
                    if (
                        typeof params.prefix !== "string" || 
                        !/^[a-z]+$/.test(params.prefix)
                    ){
                        throw new Response("Bad Request",{
                            statusText: "Category not found",
                            status: 400
                        })
                    }
                    return true
                }
            },{
                path: '/about-us',
                element: <AboutUs />,
            },
        ]
    },
])


const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter