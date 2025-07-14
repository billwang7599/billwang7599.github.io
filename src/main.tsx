import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <div className="dark">
        <head>
            <link rel="icon" type="image/svg+xml" href="/B.png" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Bill Wang</title>{" "}
        </head>
        <StrictMode>
            <App />
        </StrictMode>
    </div>,
);
