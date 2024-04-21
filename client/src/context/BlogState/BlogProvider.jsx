import axios from "axios";
import { useEffect, useState } from "react";
import { BlogContext } from "./BlogContext";

// eslint-disable-next-line react/prop-types
const BlogProvider = ({ children }) => {
	const [blogs, setBlogs] = useState([]);

	const fetchBlogs = async () => {
		const res = await axios.get("http://localhost:8080/blogs");
		setBlogs(res.data);
	};

	useEffect(() => {
		fetchBlogs();
	}, []);

	return <BlogContext.Provider value={blogs}>{children}</BlogContext.Provider>;
};

export default BlogProvider;
