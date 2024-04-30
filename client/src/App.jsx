import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Error from "./pages/Error";
import Single from "./pages/Single";
import About from "./pages/About";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import SearchResult from "./pages/SearchResult";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([
	{ path: "/", Component: Home, errorElement: Error },
	{ path: "/blogs", Component: Blogs },
	{ path: "/single/:id", Component: Single },
	{ path: "/about", Component: About },
	{ path: "/category", Component: Category },
	{ path: "/contact", Component: Contact },
	{ path: "/search", Component: SearchResult },
	{ path: "/login", Component: Login },
	{ path: "/register", Component: Register },
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
