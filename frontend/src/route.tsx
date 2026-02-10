import { createBrowserRouter } from 'react-router-dom'
import App from './pages/home/App'



export let router = createBrowserRouter([{
  path: "/",
  element: <App />,
}])
