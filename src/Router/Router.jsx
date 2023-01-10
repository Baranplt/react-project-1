import { Route, useRoutes } from 'react-router-dom'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import Services from '../components/Services/services'
import Project from '../components/Project/Project'
import Blog from '../components/Blog/Blog'
import Contact from '../components/Contact/Contact'
import ServicesSıngle from '../components/Global/servicesSingle/ServicesSıngle'
import Price from '../components/Price/Price'


function Router() {
    const routes = useRoutes(
        [

            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/project',
                element: <Project />
            },

            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/services-single',
                element: <ServicesSıngle />
            },
            {
                path: '/price',
                element: <Price />
            }


        ]
    )
    return routes
}

export default Router