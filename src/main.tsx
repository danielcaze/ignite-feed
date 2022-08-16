import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './global.css'
//Create Root indica qual o elemento raiz da nossa pagina (sendo ele o id=root) e o render ele utiliza para renderirzar html dentro
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
