import MobileNav from "../components/MobileNav";
import Navbar from "../components/Navbar";

// import Preloader from "../components/Preloader";
import Hero from "../components/Hero";

function Blog() {
	return (
		<>
			<MobileNav />
			<Navbar />
			<Hero />
			<div className="section search-result-wrap">
				<div className="container">
					<div className="row posts-entry">
						<div className="col-lg-8"></div>
					</div>
				</div>
			</div>
			{/* <Preloader /> */}
		</>
	);
}

export default Blog;
