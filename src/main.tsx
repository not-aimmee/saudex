import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "../components/ScrollToTop.tsx";

// Only load the WebMCP global integration for real visitors
if (typeof navigator !== "undefined" && !navigator.webdriver) {
  import('@mcp-b/global').catch(() => console.log('MCP not available'));
}

const root = createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <ScrollToTop />
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </BrowserRouter>
);