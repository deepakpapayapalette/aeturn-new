import React from 'react'
import WebsiteLayout from './layouts/WebsiteLayout'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FutureVision from './pages/FutureVision';
import PublicHealth from './pages/Industries/PublicHealth';
import Industries from './pages/Industries/IndustriesPage';
import MedicalTourism from './pages/Industries/MedicalTourism';
import RoadSafety from './pages/Industries/RoadSafety';
import SkillDevelopment from './pages/Industries/SkillDevelopment';
import Innovations from './pages/Industries/Innovations';
import TourismInner from './pages/Industries/TourismInner';
import NewsArticles from './pages/NewsArticles';
import NewsDetail from './pages/NewsDetail';
import About from './pages/About/AboutUs';
import Associations from './pages/associations/AssociationsPage';
import IndustriesRoute from './pages/Industries/IndustriesRoute';
import IndustriesPage from './pages/Industries/IndustriesPage';
import AssociationsPage from './pages/associations/AssociationsPage';
import AssociationRoute from './pages/associations/AssociationRoute';
import MinistryHealthEthiopia from './pages/associations/MinistryHealthEthiopia';
import BizTechSolutionsEthiopia from './pages/associations/BizTechSolutionsEthiopia';
import AboutRoute from './pages/About/AboutRoute';
import AboutUs from './pages/About/AboutUs';
import OurTeam from './pages/About/OurTeam';
import Careers from './pages/About/Careers';
import SolutionPortfolio from './pages/About/SolutionPortfolio';
import ContactUs from './pages/About/ContactUs';



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
          path: '/associations',
          element: <Associations />
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
          path: '/industries-page',
          element: <IndustriesPage />
        },
        {
          path: '/associations-page',
          element: <AssociationsPage />
        },
        {
          path: '/about-page',
          element: <AboutUs />
        },
        {
          path: '/contact',
          element: <ContactUs />
        },

        {
          path: '/about',
          element: <AboutRoute />,
          children: [
            {
              path: 'about-us',
              element: <AboutUs />,
            },
            {
              path: 'our-team',
              element: <OurTeam />,
            },
            {
              path: 'careers',
              element: <Careers />,
            },
            {
              path: 'solution-portfolio',
              element: <SolutionPortfolio />,
            },
          ],
        },
        {
          path: '/industries',
          element: <IndustriesRoute />,
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
        {
          path: '/associations',
          element: <AssociationRoute />,
          children: [
            {
              path: 'ministry-of-health', //
              element: <MinistryHealthEthiopia />,
            },
            {
              path: 'biztech-solutions', //
              element: <BizTechSolutionsEthiopia />,
            },
            {
              path: 'IHAT', //
              element: <MinistryHealthEthiopia />,
            },
            {
              path: 'suverna-tech-hyderabad', //
              element: <MinistryHealthEthiopia />,
            },
            {
              path: 'ministry-of-tourism-UP', //
              element: <MinistryHealthEthiopia />,
            },
            {
              path: 'KDS-services', //
              element: <MinistryHealthEthiopia />,
            },
            {
              path: 'IACC', //
              element: <MinistryHealthEthiopia />,
            },
            {
              path: 'healthcare-sector-skill-council', //
              element: <MinistryHealthEthiopia />,
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
