

import PhonePage from "./components/account/Phonepage"



import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

//Component
import Messenger from "./components/Messenger";

const App = () => {
  
  const Layout = () => {
    return (
      <div className="app">
        <Outlet/>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/" ,
          element: <Messenger />,
        
        },
        {
          path: "/login", 
          element: <PhonePage />,
        }
        
      ],
    },
  ]);        
  
  return <RouterProvider router={router} />;

};

export default App;
