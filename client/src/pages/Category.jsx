import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SidebarCategories from "../components/sidebars/SidebarCategories";
import SidebarTags from "../components/sidebars/SidebarTags";
import SidebarPopularPosts from "../components/sidebars/SidebarPopularPosts";
import SidebarSearch from "../components/sidebars/SidebarSearch";
import Pagination from "../components/Pagination";

const Category = () => {
	return (
		<>
			<Navbar />
			<div className="section search-result-wrap">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="heading">Category: Business</div>
						</div>
					</div>
					<div className="row posts-entry">
						<div className="col-lg-8">
							<div className="blog-entry d-flex blog-entry-search-item">
								<a
									href="single.html"
									className="img-link me-4"
								>
									<img
										src="images/img_1_sq.jpg"
										alt="Image"
										className="img-fluid"
									/>
								</a>
								<div>
									<span className="date">
										Apr. 14th, 2022 &bullet; <a href="#">Business</a>
									</span>
									<h2>
										<a href="single.html">
											Thought you loved Python? Wait until you meet Rust
										</a>
									</h2>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Unde, nobis ea quis inventore vel voluptas.
									</p>
									<p>
										<a
											href="single.html"
											className="btn btn-sm btn-outline-primary"
										>
											Read More
										</a>
									</p>
								</div>
							</div>

							<div className="blog-entry d-flex blog-entry-search-item">
								<a
									href="single.html"
									className="img-link me-4"
								>
									<img
										src="images/img_2_sq.jpg"
										alt="Image"
										className="img-fluid"
									/>
								</a>
								<div>
									<span className="date">
										Apr. 14th, 2022 &bullet; <a href="#">Business</a>
									</span>
									<h2>
										<a href="single.html">
											Thought you loved Python? Wait until you meet Rust
										</a>
									</h2>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Unde, nobis ea quis inventore vel voluptas.
									</p>
									<p>
										<a
											href="single.html"
											className="btn btn-sm btn-outline-primary"
										>
											Read More
										</a>
									</p>
								</div>
							</div>

							<div className="blog-entry d-flex blog-entry-search-item">
								<a
									href="single.html"
									className="img-link me-4"
								>
									<img
										src="images/img_3_sq.jpg"
										alt="Image"
										className="img-fluid"
									/>
								</a>
								<div>
									<span className="date">
										Apr. 14th, 2022 &bullet; <a href="#">Business</a>
									</span>
									<h2>
										<a href="single.html">
											Thought you loved Python? Wait until you meet Rust
										</a>
									</h2>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Unde, nobis ea quis inventore vel voluptas.
									</p>
									<p>
										<a
											href="single.html"
											className="btn btn-sm btn-outline-primary"
										>
											Read More
										</a>
									</p>
								</div>
							</div>

							<div className="blog-entry d-flex blog-entry-search-item">
								<a
									href="single.html"
									className="img-link me-4"
								>
									<img
										src="images/img_4_sq.jpg"
										alt="Image"
										className="img-fluid"
									/>
								</a>
								<div>
									<span className="date">
										Apr. 14th, 2022 &bullet; <a href="#">Business</a>
									</span>
									<h2>
										<a href="single.html">
											Thought you loved Python? Wait until you meet Rust
										</a>
									</h2>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Unde, nobis ea quis inventore vel voluptas.
									</p>
									<p>
										<a
											href="single.html"
											className="btn btn-sm btn-outline-primary"
										>
											Read More
										</a>
									</p>
								</div>
							</div>

							<div className="blog-entry d-flex blog-entry-search-item">
								<a
									href="single.html"
									className="img-link me-4"
								>
									<img
										src="images/img_5_sq.jpg"
										alt="Image"
										className="img-fluid"
									/>
								</a>
								<div>
									<span className="date">
										Apr. 14th, 2022 &bullet; <a href="#">Business</a>
									</span>
									<h2>
										<a href="single.html">
											Thought you loved Python? Wait until you meet Rust
										</a>
									</h2>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Unde, nobis ea quis inventore vel voluptas.
									</p>
									<p>
										<a
											href="single.html"
											className="btn btn-sm btn-outline-primary"
										>
											Read More
										</a>
									</p>
								</div>
							</div>
							<Pagination />
						</div>

						<div className="col-lg-4 sidebar">
							<SidebarSearch />
							<SidebarPopularPosts />
							<SidebarCategories />
							<SidebarTags />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
export default Category;
