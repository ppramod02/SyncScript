import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from "./routes/Home.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";
import Space from "./routes/Space.tsx";
// import { Provider } from 'react-redux';
// import { store } from './store.ts';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
// import NamePopup from "./components/NamePopup.tsx";
import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/space",
//         element: <Space />,
//       },
//       {
//         path: "/name",
//         element: <NamePopup />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    
      {/* <RouterProvider router={router} /> */}
      <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="space" element={<Space />} />
          {/* <Route path="name" element={<NamePopup />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </HashRouter>  
  </React.StrictMode>
);

