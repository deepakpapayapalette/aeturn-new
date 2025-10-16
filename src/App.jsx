
// import { Route, Routes } from 'react-router-dom'
import React from 'react'


import WebsiteLayout from './layouts/WebsiteLayout'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {

  // return (
  //   <Routes>
  //     {/* Auth routes - no WebsiteLayout */}
  //     <Route path="/login" element={<Login />} />
  //     <Route path="/signup" element={<Signup />} />

  //     {/* Website routes */}
  //     <Route path="/*" element={<WebsiteRoutes />} />

  //     {/* Dashboards */}
  //     <Route path="/admin/*" element={<AdminRoutes />} />
  //     {/*<Route path="/dashboard/*" element={<UserRoutes />} /> */}
  //   </Routes>
  // )
  const router = createBrowserRouter([
    {
      path: '/',
      element: <WebsiteLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },

      ]
    },

  ]);
  return (<RouterProvider
    router={router} future={{ v7_startTransition: true, }}
  />
  )
}

export default App
