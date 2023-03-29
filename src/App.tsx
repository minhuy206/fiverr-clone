import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import renderRoutes from "./route";
import { Suspense } from "react";
import LoadingSpin from "./_components/LoadingSpin";

function App() {
  return (
    <Suspense fallback={<LoadingSpin key={"spin"} />}>
      <BrowserRouter>
        <Routes>{renderRoutes()}</Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
