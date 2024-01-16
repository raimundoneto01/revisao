import {createBrowserRouter, Link } from "react-router-dom";
import Home from "../pages/Home";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: 'about',
        element: (
            <div>
                <h1>Testando</h1>
                <Link to='/'>About</Link>
            </div>
        )
    },
   
    
])