import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "../components/ScrollToTop.tsx";
import { loadWebMcpRuntime } from "./webmcpRuntime";

if (typeof navigator !== "undefined" && !navigator.webdriver) {
  const scheduleWebMcpInitialization = () => {
    window.setTimeout(() => {
      void loadWebMcpRuntime().catch((error: unknown) => {
        console.error("Unable to initialize WebMCP runtime:", error);
      });
    }, 4000);
  };

  if (document.readyState === "complete") {
    scheduleWebMcpInitialization();
  } else {
    window.addEventListener("load", scheduleWebMcpInitialization, { once: true });
  }
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