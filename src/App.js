import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./Assets/images/Loader/loader.gif";

const HomePage = lazy(() => import("./Components/HomePage/HomePage"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className="loader">
                  <img src={Loader} alt="" />
                </div>
              }
            >
              <HomePage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
