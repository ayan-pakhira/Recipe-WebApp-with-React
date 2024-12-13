import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Header from './components/header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import About from './pages/about/About.jsx'
import Detail from './pages/detail/Detail.jsx'
import Home from './pages/home/Home.jsx'
import Contact from './pages/contact/Contact.jsx'
import Login from './pages/login/Login.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='detail' element={<Detail/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='login' element={<Login/>}/>

    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
