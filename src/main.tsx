import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import Card from "./components/Card";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex flex-col h-screen bg-[#f4f8ff]">
      <Header />
      <main className="flex-1 max-w-[1200px] m-auto w-full">
        <Filter />
        <div className="bg-white rounded-md py-2 mt-4">
          <p className="Ttext-[#00A2F7] font-bold text-center">
            Os cursos mais buscados
          </p>
          <Card></Card>
        </div>
      </main>
      <Footer />
    </div>
  </StrictMode>,
);
