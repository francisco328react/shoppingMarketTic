import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import { Header } from './app/components/Header'

export function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Header />
    }
  ])


  return (
    <div className='flex justify-center items-center bg-gray-200 h-screen'>
      <RouterProvider router={route}></RouterProvider>
    </div>
  )
}
