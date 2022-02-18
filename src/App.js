import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("./Components/HomePage/HomePage"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {" "}
              <HomePage />{" "}
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
