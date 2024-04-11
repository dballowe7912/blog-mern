import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Error from "./pages/Error";

const router = createBrowserRouter([
	{ path: "/", Component: Home, errorElement: Error },
	{ path: "/blogs", Component: Blogs },
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
