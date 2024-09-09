import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { routes } from './routes'
import { Auth0Provider } from '@auth0/auth0-react'

const router = createBrowserRouter(routes)

const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="dev-mako-2024-olivia.au.auth0.com"
      clientId="F5eiaLpVKWLNrdRTznkMDU1LQD7V6iWZ"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'https://todos/api',
      }}
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Auth0Provider>,
  )
})
