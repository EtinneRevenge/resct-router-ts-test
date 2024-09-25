import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.js'
import { authProvider } from './authContext.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Failed to find root element");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404</div>
  },
  {
    path: '/about-us',
    element: <div>About us</div>
  }
]);


createRoot(rootElement).render(
  <StrictMode>
    <authProvider>
      <RouterProvider router={router} />
    </authProvider>
  </StrictMode>,
)
