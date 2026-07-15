import React,{lazy,Suspense,suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Errorelement from "./components/Errorelement";
import ResMenu from "./components/ResMenu";


const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
const Grocery = lazy(()=>import('./components/Grocery'))
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorelement />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restrauntMenu/:id",
        element:<ResMenu/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>loading...</h1>}><Grocery /></Suspense>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
