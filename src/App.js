import React,{lazy,Suspense,suspense,useEffect,useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Errorelement from "./components/Errorelement";
import ResMenu from "./components/ResMenu";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/store";
import Cart from "./components/Cart";

const App = () => {
const [userName,setUserName] = useState('')
useEffect(()=>{
  const data = {
    name :"mani"
  }
setUserName(data.name)

},[])

console.log(userName)
  return (

    <div>
      <Provider store={appStore}>
      <userContext.Provider value={{userName,setUserName}} >
      <Header />
      <Outlet />
      </userContext.Provider> 
      </Provider>
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
       path:"/cart",
       element:<Cart />
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
