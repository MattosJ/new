import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import QuemSomos from './pages/quemSomos.tsx'
import FaleComnosco from './pages/FaleComnosco.tsx'
import Servicos from './pages/Servicos.tsx'
import NossosProjetos from './pages/NossosProjetos.tsx'
import PorOndePassamos from './pages/PorOndePassamos.tsx'
import Blog from './pages/Blog.tsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import NewsPost from './pages/NewPost.tsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
  },
  {
    path:'/quem-somos',
    element: <QuemSomos/>,
  },
  {
    path:'/fale-conosco',
    element: <FaleComnosco/>,
  },
  {
    path:'/servicos',
    element: <Servicos/>,
  },
  {
    path:'/por-onde-passamos',
    element: <PorOndePassamos/>,
  },
  {
    path:'/nossos-projetos',
    element: <NossosProjetos/>,
  },
  {
    path:'/blog',
    element: <Blog/>,
  },
  {
   path: '/post/:id',
   element : <NewsPost />
  }
  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
