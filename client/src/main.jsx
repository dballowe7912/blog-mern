import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import App from "./App.jsx";
import "./index.css";

=======
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import ErrorPage from "./pages/Error.jsx";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: "blog",
		element: <Blog />,
	}
]);

>>>>>>> origin/main
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
