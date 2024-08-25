import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OutLet from "./pages/OutLet";
import Coontact from "./pages/Coontact";
import About from "./pages/About";
import Home from "./pages/Home";
import Wither from "./pages/Wither";
import Movies from "./pages/Movies";
import Translation from "./pages/Translation";
import Not from "./pages/not";
function App() {
  const roting = createBrowserRouter([
    { path: "/", element:<OutLet/>, children:[
      {path :"/", element:<Home />},
      {path :"/About", element:<About/>},
      {path :"/Contact", element:<Coontact/>},
      {path :"/wither", element:<Wither/>},
      {path :"/movies", element:<Movies />},
      {path :"/Translation", element:<Translation />},
      {path :"/*", element:<Not />},
    ] },
  ]);
  return (
    <>
    <RouterProvider router={roting} />
    </>
  );
}
export default App;
