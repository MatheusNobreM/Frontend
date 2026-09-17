import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex flex-col">
      <Header />
      <div className="content"> </div>
      <Footer />
    </div>
  </StrictMode>,
);
