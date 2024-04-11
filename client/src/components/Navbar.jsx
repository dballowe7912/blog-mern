import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="site-nav">
			<div className="container">
				<div className="menu-bg-wrap">
					<div className="site-navigation">
						<div className="row g-0 align-items-center">
							<div className="col-2">
								<Link
									to="/"
									className="logo m-0 float-start"
								>
									Blogy<span className="text-primary">.</span>
								</Link>
							</div>
							<div className="col-8 text-center">
								<form
									action="#"
									className="search-form d-inline-block d-lg-none"
								>
									<input
										type="text"
										className="form-control"
										placeholder="Search..."
									/>
									<span className="bi-search"></span>
								</form>

								<ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
									<li className="active">
										<Link to="/">Home</Link>
									</li>
									<li className="active">
										<Link to="/about">About</Link>
									</li>
									<li className="active">
										<Link to="/contact">Contact</Link>
									</li>
									<li className="has-children">
										<Link to="#">Pages</Link>
										<ul className="dropdown">
											<li>
												<Link to="/search">Search Result</Link>
											</li>
											<li>
												<Link to="/blogs">All Blogs</Link>
											</li>
											<li>
												<Link to="/single">Blog Single</Link>
											</li>
											<li>
												<Link to="/category">Category</Link>
											</li>
											<li>
												<Link to="/new">Create Blog</Link>
											</li>
											<li>
												<Link to="/about">About</Link>
											</li>
											<li>
												<Link to="/contact">Contact Us</Link>
											</li>
											<li>
												<Link to="/login">Login</Link>
											</li>
											<li>
												<Link to="/register">Register</Link>
											</li>
											<li>
												<Link to="/logout">Logout</Link>
											</li>
										</ul>
									</li>
								</ul>
							</div>
							<div className="col-2 text-end">
								<a
									href="#"
									className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
								>
									<span></span>
								</a>
								<form
									action="#"
									className="search-form d-none d-lg-inline-block"
								>
									<input
										type="text"
										className="form-control"
										placeholder="Search..."
									/>
									<span className="bi-search"></span>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
