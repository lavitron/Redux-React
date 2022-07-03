import React from 'react'
const Home = React.lazy(() => import('../pages/Home'))
const NotFound = React.lazy(() => import('../pages/NotFound'))

// Çift sılaş da bozuluyor
export const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '*',
        element: <NotFound />
    }
]
