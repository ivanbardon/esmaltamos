import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Privacy from './pages/Privacy';
import Layout from './components/Layout';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <Privacy />
    </Layout>
  </StrictMode>
);
