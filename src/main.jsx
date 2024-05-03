import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from "./routes/Home.jsx";
import Space from "./routes/Space.jsx";
import CodePaste from './routes/CodePaste.jsx';
import ErrorPage from "./routes/ErrorPage.jsx";
import { store } from './store.js';
import { Provider } from 'react-redux';
import "./index.css";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
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

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="space/:roomId" element={<Space />} />
          <Route path="code/:pasteKey" element={<CodePaste />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </HashRouter>  
  </Provider>
);

