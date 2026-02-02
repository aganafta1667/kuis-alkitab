import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CekPass from "./components/cekpass";
import "./index.css";

function Root() {
  const [isAuth, setIsAuth] = useState(false);

  return isAuth ? (
    <App />
  ) : (
    <CekPass onSuccess={() => setIsAuth(true)} />
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
