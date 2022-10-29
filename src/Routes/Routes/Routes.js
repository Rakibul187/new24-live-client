import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Login/Register";
import News from "../../Pages/News/News";
import TermsAndConditions from "../../Pages/Shared/others/TermsAndConditions/TermsAndConditions";
import Profile from "../../Pages/Shared/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Category></Category>
            },
            {
                path: '/news/:id',
                element: <PrivateRoute> <News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/register', element: <Register></Register>
            },
            {
                path: '/terms', element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/profile', element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
])