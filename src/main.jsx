import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout.jsx'
import Home from './Component/Pages/Home.jsx'
import CodingProfile from './Component/Pages/CodingProfile/CodingProfile.jsx'
import Project from './Component/Pages/Project/Project.jsx'
import Contact from './Component/Pages/Contact/Contact.jsx'
import { Provider } from 'react-redux'
import store from './Store/Store.js'
import About from './Component/Pages/About.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='codingprofile' element={<CodingProfile />} />
      <Route path='project' element={<Project />} />
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />
      {/* <Route path="*" element={<h1 className="text-center text-red-500 mt-10">404 - Page Not Found</h1>} /> */}
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Wrap your app with Redux Provider */}
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)