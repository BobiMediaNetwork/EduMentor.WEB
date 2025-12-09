import {BrowserRouter} from "react-router-dom";
import {RouterProvider} from "./components/providers/RouterProvider.jsx";

export function App() {
  return (
      <BrowserRouter>
        <RouterProvider />
      </BrowserRouter>
  );
}

