import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider as ChakraProvider } from './components/ui/provider.tsx'
import { QueryClientProvider , QueryClient } from 'react-query'

const client = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>
)
