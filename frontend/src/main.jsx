import React from "react";
import ReactDOM  from "react-dom/client";
import ErrorBoundary from "./ErrorBoundary"
import App from "./App";
import "./style.css";


ReactDOM.createRoot(document.getElementById("root")).render(    
    <ErrorBoundary>
        <App />
    </ErrorBoundary>
    
)

