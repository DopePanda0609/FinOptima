import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // If your file is actually `App.jsx`
 // Ensure this is the correct path

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  );

