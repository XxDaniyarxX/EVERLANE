import {createBrowserRouter} from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Men from './pages/Men.jsx'
import Women from './pages/Women.jsx'
import About from './pages/About.jsx'
import Everworld from './pages/Everworld.jsx'


export const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {path: '/', element: <Men />},
      {path: 'women', element: <Women />},
      {path: 'about', element: <About />},
      {path: 'ever-world', element: <Everworld />},
    ]
  }
])
