import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Error from "./pages/Error";
import Single from "./pages/Single";
import About from "./pages/About";
import Category from "./pages/Category";

const router = createBrowserRouter([
	{ path: "/", Component: Home, errorElement: Error },
	{ path: "/blogs", Component: Blogs },
	{ path: "/single", Component: Single },
	{ path: "/about", Component: About },
	{ path: "/category", Component: Category },
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
