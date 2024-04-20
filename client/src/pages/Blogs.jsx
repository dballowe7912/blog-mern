import { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
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
import Footer from "../components/Footer";

function Blog() {
	const [blogs, setBlogs] = useState([]);
	const fetchBlogs = () => {
		axios.get("http://127.0.0.1:8080/blogs").then((res) => {
			setBlogs(res.data);
		});
	};

	useEffect(() => {
		fetchBlogs();
		AOS.init({
			duration: 1200,
			easing: "ease-in",
		});
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
						<div className="col-lg-4 sidebar">
							<SidebarSearch />
							<SidebarPopularPosts />
							<SidebarCategories />
							<SidebarTags />
						</div>
					</div>
					<Pagination />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Blog;
