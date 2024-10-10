import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from "react-redux";
import filterStore from "./filters/filterStore.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={filterStore}>
            <App/>
        </Provider>
    </React.StrictMode>,
)
