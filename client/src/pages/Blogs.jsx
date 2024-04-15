import { useState, useEffect } from "react";
import axios from "axios";

import MobileNav from "../components/MobileNav";
import Navbar from "../components/Navbar";

// import Preloader from "../components/Preloader";
import Hero from "../components/Hero";
import BlogEntry from "../components/BlogEntry";
import Pagination from "../components/Pagination";
import SidebarSearch from "../components/sidebars/SidebarSearch";
import SidebarPopularPosts from "../components/sidebars/SidebarPopularPosts";
import SidebarCategories from "../components/sidebars/SidebarCategories";
import SidebarTags from "../components/sidebars/SidebarTags";

function Blog() {
	const [blogs, setBlogs] = useState([]);
	const fetchBlogs = async () => {
		axios.get("http://127.0.0.1:8080/blogs").then((res) => {
			setBlogs(res.data);
		});
	};

	useEffect(() => {
		fetchBlogs();
	}, [blogs]);

	return (
		<>
			<MobileNav />
			<Navbar />
			<Hero />
			<div className="section search-result-wrap">
				<div className="container">
					<div className="row posts-entry">
						<div className="col-lg-8">
							{blogs.map((blog) => (
								<BlogEntry
									key={blog._id}
									blog={blog}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
			{/* TODO fix sidebar */}
			<div className="col-lg-4 sidebar">
				<Pagination />
				<SidebarSearch />
				<SidebarPopularPosts />
				<SidebarCategories />
				<SidebarTags />
			</div>
			{/* <Preloader /> */}
		</>
	);
}

export default Blog;
