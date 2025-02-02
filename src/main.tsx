// main index js file 
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// react router dom
import { BrowserRouter } from 'react-router'

// root div element present in the index.html file 
const targetElement = document.getElementById('root')!;

// rendering the component inside the root element 
createRoot(targetElement).render(
  // react router dom setup
  <BrowserRouter>
  {/* main component for rendering other components */}
    <App />
  </BrowserRouter>,
)
