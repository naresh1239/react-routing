import { lazy, Suspense, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, Route, RouterProvider, Routes, useNavigate } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import Home1 from './components/homes/Home1.jsx'
import Home2 from './components/homes/Home2.jsx'
import Dyamic from './components/homes/Dyamic.jsx'
import Profile from './components/Profile.jsx'
import { AuthProvider } from './utils/Auth.jsx'
// import About from './components/About.jsx'

const LazyAbout = lazy(()=> import("./components/About.jsx"))

function Errorpage(){
 const navigate = useNavigate()

 useEffect(() => {
 const timeout = setTimeout(() => {
  navigate("/")
 }, 500);
 return ()=> clearTimeout(timeout)
 }, [])
 
return <h1>no route matched</h1>
}


const router = createBrowserRouter(
  createRoutesFromElements(
 
      <Route element={<Layout/>}>
      <Route path='/' element={<App/>}></Route>
      <Route path='/home' element={<Home/>}>
      <Route path='home1' element={<Home1/>}></Route>
      <Route path='home2' element={<Home2/>}></Route>
      <Route path=':id' element={<Dyamic/>}></Route>
      </Route>
      <Route path='/About' element={
        <Suspense fallback='...loading'>
          <LazyAbout/>
        </Suspense>
      }/>
      <Route path='/Profile' element={<Profile/>}></Route>
      <Route path='*' element={<Errorpage/>}></Route>
      </Route>
      // <Route  element={<App/>}></Route>


  )
)
createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
  </AuthProvider>
)
