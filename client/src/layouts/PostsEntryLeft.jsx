import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader";
import formatDate from "../../utils/formatDate";
import truncate from "../../utils/truncate";

function PostsEntryLeft({ blogs }) {
	console.log(blogs);
	if (blogs)
		return (
			<section className="section posts-entry">
				<div className="container">
					<div className="row mb-4">
						<div className="col-sm-6">
							<h2 className="posts-entry-title">Business</h2>
						</div>
						<div className="col-sm-6 text-sm-end">
							<Link
								to="/category/business"
								className="read-more"
							>
								View All
							</Link>
						</div>
					</div>
					<div className="row g-3">
						<div className="col-md-9">
							<div className="row g-3">
								<div className="col-md-6">
									<div className="blog-entry">
										<Link
											to={`/single/${blogs[5]._id}`}
											className="img-link"
										>
											<img
												src="images/img_1_sq.jpg"
												alt="Image"
												className="img-fluid"
											/>
										</Link>
										<span className="date">{formatDate(blogs[5].date)}</span>
										<h2>
											<Link to={`/single/${blogs[5]._id}`}>
												{blogs[5].title}
											</Link>
										</h2>
										<p>{truncate(blogs[5].body)}</p>
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
								<div className="col-md-6">
									<div className="blog-entry">
										<Link
											to={`/single/${blogs[6]._id}`}
											className="img-link"
										>
											<img
												src="images/img_2_sq.jpg"
												alt="Image"
												className="img-fluid"
											/>
										</Link>
										<span className="date">{formatDate(blogs[6].date)}</span>
										<h2>
											<Link to={`/single/${blogs[6]._id}`}>
												{blogs[6].title}
											</Link>
										</h2>
										<p>{truncate(blogs[6].body)}</p>
										<p>
											<Link
												to={`/single/${blogs[6]._id}`}
												className="btn btn-sm btn-outline-primary"
											>
												Read More
											</Link>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<ul className="list-unstyled blog-entry-sm">
								<li>
									<span className="date">Apr. 14th, 2022</span>
									<h3>
										<a href="single.html">
											Don’t assume your user data in the cloud is safe
										</a>
									</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Unde, nobis ea quis inventore vel voluptas.
									</p>
									<p>
										<a
											href="#"
											className="read-more"
										>
											Continue Reading
										</a>
									</p>
								</li>

								<li>
									<span className="date">Apr. 14th, 2022</span>
									<h3>
										<a href="single.html">
											Meta unveils fees on metaverse sales
										</a>
									</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Unde, nobis ea quis inventore vel voluptas.
									</p>
									<p>
										<a
											href="#"
											className="read-more"
										>
											Continue Reading
										</a>
									</p>
								</li>

								<li>
									<span className="date">Apr. 14th, 2022</span>
									<h3>
										<a href="single.html">
											UK sees highest inflation in 30 years
										</a>
									</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Unde, nobis ea quis inventore vel voluptas.
									</p>
									<p>
										<a
											href="#"
											className="read-more"
										>
											Continue Reading
										</a>
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		);
	return <Preloader />;
}

const propTypes = {
	blogs: PropTypes.array,
};

PostsEntryLeft.propTypes = propTypes;

export default PostsEntryLeft;
