import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import List from './Components/main_list';
import Register from './Components/Register';
import Hero1 from './Components/Header';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Footer from './Components/Footer';
import Learn from './Components/Learn_more';

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
    <Hero1/>
    <Home/>
    <Footer/>
    </>,
  },
  {
    path: "/Register",
    element: <><Navbar/><Register/></>,
  },
  ,
  {
    path: "/Learn",
    element: <><Learn/></>,
  },
]);
function App() {
  const [count, setCount] = useState(0)

  return (
        <RouterProvider router={router} />
  )
}

export default App
