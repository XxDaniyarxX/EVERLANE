import './App.css'
import {RouterProvider} from 'react-router-dom'
import {myRouter} from './routers.jsx'

export default function App() {

  return (
    <div style={{margin: '0 auto', width: '1400px',}}>
      <RouterProvider router={myRouter} />
    </div>
  )
}
