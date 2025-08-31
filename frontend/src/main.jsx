import ReactDOM  from "react-dom/client";
import React from "react";
import ErrorBoundary from "./ErrorBoundary"
import App from "./App";
import "./style.css";


ReactDOM.createRoot(document.getElementById("root")).render(    
    <ErrorBoundary>
        <App />
    </ErrorBoundary>
    
)

