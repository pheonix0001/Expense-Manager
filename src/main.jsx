import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BudgetsProvider} from "./contexts/BudgetsContext.jsx"
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BudgetsProvider>
         <App />
        </BudgetsProvider>

    </React.StrictMode>
    
)
