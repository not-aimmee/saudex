import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter} from 'react-router-dom'
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "../components/ScrollToTop.tsx";
import '@mcp-b/global';

createRoot(document.getElementById('root')!).render(
   
    <BrowserRouter>
     <ScrollToTop/>
      <HelmetProvider>
      <App />
      </HelmetProvider>
    </BrowserRouter>
  
)
