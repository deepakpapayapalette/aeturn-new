import React from 'react'
import WebsiteLayout from './layouts/WebsiteLayout'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FutureVision from './pages/FutureVision';
import PublicHealth from './pages/Industries/PublicHealth';
import Industries from './pages/Industries/Industries';
import MedicalTourism from './pages/Industries/MedicalTourism';
import RoadSafety from './pages/Industries/RoadSafety';
import SkillDevelopment from './pages/Industries/SkillDevelopment';
import Innovations from './pages/Industries/Innovations';
import TourismInner from './pages/Industries/TourismInner';
import NewsArticles from './pages/NewsArticles';
import NewsDetail from './pages/NewsDetail';



function App() {
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
        {
          path: '/future-vision',
          element: <FutureVision />
        },
        {
          path: '/news',
          element: <NewsArticles />
        },
        {
          path: '/news/:id',
          element: <NewsDetail />
        },

        {
          path: '/industries',
          element: <Industries />,
          children: [
            {
              path: 'public-health', // 👈 child route -> /future-vision/child
              element: <PublicHealth />,
            },
            {
              path: 'medical-tourism',
              element: <MedicalTourism />,
            },
            {
              path: 'road-safety',
              element: <RoadSafety />,
            },
            {
              path: 'skill-development',
              element: <SkillDevelopment />
            },
            {
              path: 'innovations',
              element: <Innovations />
            },
            {
              path: 'tourism',
              element: <TourismInner />
            },

          ],
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
