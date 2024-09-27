import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactDOMServer from 'react-dom/server';

const htmlString = ReactDOMServer.renderToStaticMarkup(<App />);
console.log(htmlString);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
