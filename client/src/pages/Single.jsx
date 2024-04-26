import { useContext } from "react";
import { BlogContext } from "../context/BlogState/BlogContext";
import { useParams, Link } from "react-router-dom";

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SidebarCategories from "../components/sidebars/SidebarCategories";
import SidebarTags from "../components/sidebars/SidebarTags";
import SidebarPopularPosts from "../components/sidebars/SidebarPopularPosts";
import SidebarBio from "../components/sidebars/SidebarBio";
import SidebarSearch from "../components/sidebars/SidebarSearch";

//  utils
import formatDate from "../../utils/formatDate";
import MoreBlogPosts from "../components/MoreBlogPosts";
import CommentForm from "../components/CommentForm";

function Single() {
	const blogs = useContext(BlogContext);
	const params = useParams();
	const blog = blogs.find((blog) => blog._id === params.id);
	const { title, author, date, body, image, category, tags } = blog;

	if (!blog) {
		return "Loading...";
	}

	return (
		<>
			<Navbar />
			<div
				className="site-cover site-cover-sm same-height overlay single-page"
				style={{ backgroundImage: `url(../${image})` }}
			>
				<div className="container">
					<div className="row same-height justify-content-center">
						<div className="col-md-6">
							<div className="post-entry text-center">
								<h1 className="mb-4">{title}</h1>
								<div className="post-meta align-items-center text-center">
									<figure className="author-figure mb-0 me-3 d-inline-block">
										<img
											src="../images/person_1.jpg"
											alt="Image"
											className="img-fluid"
										/>
									</figure>
									<span className="d-inline-block mt-1">By {author}</span>
									<span>&nbsp;-&nbsp; {formatDate(date)}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section className="section">
				<div className="container">
					<div className="row blog-entries element-animate">
						<div className="col-md-12 col-lg-8 main-content">
							<div className="post-content-body">
								<p>{body}</p>
								{/* TODO create Photo Section */}
								<div className="row my-4">
									<div className="col-md-12 mb-4">
										<img
											src="../images/img_2_horizontal.jpg"
											alt="Image placeholder"
											className="img-fluid rounded"
										/>
									</div>
									<div className="col-md-6 mb-4">
										<img
											src="../images/img_2_horizontal.jpg"
											alt="Image placeholder"
											className="img-fluid rounded"
										/>
									</div>
									<div className="col-md-6 mb-4">
										<img
											src="../images/img_2_horizontal.jpg"
											alt="Image placeholder"
											className="img-fluid rounded"
										/>
									</div>
								</div>
								{/* more of blog post  */}
								<p>
									Quibusdam autem, quas molestias recusandae aperiam molestiae
									modi qui ipsam vel. Placeat tenetur veritatis tempore quos
									impedit dicta, error autem, quae sint inventore ipsa quidem.
									Quo voluptate quisquam reiciendis, minus, animi minima eum
									officia doloremque repellat eos, odio doloribus cum.
								</p>
								<p>
									Temporibus quo dolore veritatis doloribus delectus dolores
									perspiciatis recusandae ducimus, nisi quod, incidunt ut
									quaerat, magnam cupiditate. Aut, laboriosam magnam, nobis
									dolore fugiat impedit necessitatibus nisi cupiditate, quas
									repellat itaque molestias sit libero voluptas eveniet omnis
									illo ullam dolorem minima.
								</p>
								<p>
									Porro amet accusantium libero fugit totam, deserunt ipsa,
									dolorem, vero expedita illo similique saepe nisi deleniti.
									Cumque, laboriosam, porro! Facilis voluptatem sequi nulla
									quidem, provident eius quos pariatur maxime sapiente illo
									nostrum quibusdam aliquid fugiat! Earum quod fuga id officia.
								</p>
								<p>
									Illo magnam at dolore ad enim fugiat ut maxime facilis autem,
									nulla cumque quis commodi eos nisi unde soluta, ipsa eius
									aspernatur sint atque! Nihil, eveniet illo ea, mollitia fuga
									accusamus dolor dolorem perspiciatis rerum hic, consectetur
									error rem aspernatur!
								</p>

								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Temporibus magni explicabo id molestiae, minima quas assumenda
									consectetur, nobis neque rem, incidunt quam tempore
									perferendis provident obcaecati sapiente, animi vel expedita
									omnis quae ipsa! Obcaecati eligendi sed odio labore vero
									reiciendis facere accusamus molestias eaque impedit,
									consequuntur quae fuga vitae fugit?
								</p>
							</div>
							{/* End blog post */}
							<div className="pt-5">
								<p>
									Categories:{" "}
									<Link to={`/category/${category}`}>{category}</Link> Tags:{" "}
									{tags.map((tag) => (
										<Link
											to={`/tags/${tag}`}
											key={`tag-${tag}`}
										>
											#{tag}{" "}
										</Link>
									))}
								</p>
							</div>

							{/* Comment Section */}
							<div className="pt-5 comment-wrap">
								<h3 className="mb-5 heading">6 Comments</h3>
								<ul className="comment-list">
									<li className="comment">
										<div className="vcard">
											<img
												src="images/person_1.jpg"
												alt="Image placeholder"
											/>
										</div>
										<div className="comment-body">
											<h3>Jean Doe</h3>
											<div className="meta">January 9, 2018 at 2:21pm</div>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Pariatur quidem laborum necessitatibus, ipsam
												impedit vitae autem, eum officia, fugiat saepe enim
												sapiente iste iure! Quam voluptas earum impedit
												necessitatibus, nihil?
											</p>
											<p>
												<a
													href="#"
													className="reply rounded"
												>
													Reply
												</a>
											</p>
										</div>
									</li>

									<li className="comment">
										<div className="vcard">
											<img
												src="images/person_2.jpg"
												alt="Image placeholder"
											/>
										</div>
										<div className="comment-body">
											<h3>Jean Doe</h3>
											<div className="meta">January 9, 2018 at 2:21pm</div>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Pariatur quidem laborum necessitatibus, ipsam
												impedit vitae autem, eum officia, fugiat saepe enim
												sapiente iste iure! Quam voluptas earum impedit
												necessitatibus, nihil?
											</p>
											<p>
												<a
													href="#"
													className="reply rounded"
												>
													Reply
												</a>
											</p>
										</div>

										<ul className="children">
											<li className="comment">
												<div className="vcard">
													<img
														src="images/person_3.jpg"
														alt="Image placeholder"
													/>
												</div>
												<div className="comment-body">
													<h3>Jean Doe</h3>
													<div className="meta">January 9, 2018 at 2:21pm</div>
													<p>
														Lorem ipsum dolor sit amet, consectetur adipisicing
														elit. Pariatur quidem laborum necessitatibus, ipsam
														impedit vitae autem, eum officia, fugiat saepe enim
														sapiente iste iure! Quam voluptas earum impedit
														necessitatibus, nihil?
													</p>
													<p>
														<a
															href="#"
															className="reply rounded"
														>
															Reply
														</a>
													</p>
												</div>

												<ul className="children">
													<li className="comment">
														<div className="vcard">
															<img
																src="images/person_4.jpg"
																alt="Image placeholder"
															/>
														</div>
														<div className="comment-body">
															<h3>Jean Doe</h3>
															<div className="meta">
																January 9, 2018 at 2:21pm
															</div>
															<p>
																Lorem ipsum dolor sit amet, consectetur
																adipisicing elit. Pariatur quidem laborum
																necessitatibus, ipsam impedit vitae autem, eum
																officia, fugiat saepe enim sapiente iste iure!
																Quam voluptas earum impedit necessitatibus,
																nihil?
															</p>
															<p>
																<a
																	href="#"
																	className="reply rounded"
																>
																	Reply
																</a>
															</p>
														</div>

														<ul className="children">
															<li className="comment">
																<div className="vcard">
																	<img
																		src="images/person_5.jpg"
																		alt="Image placeholder"
																	/>
																</div>
																<div className="comment-body">
																	<h3>Jean Doe</h3>
																	<div className="meta">
																		January 9, 2018 at 2:21pm
																	</div>
																	<p>
																		Lorem ipsum dolor sit amet, consectetur
																		adipisicing elit. Pariatur quidem laborum
																		necessitatibus, ipsam impedit vitae autem,
																		eum officia, fugiat saepe enim sapiente iste
																		iure! Quam voluptas earum impedit
																		necessitatibus, nihil?
																	</p>
																	<p>
																		<a
																			href="#"
																			className="reply rounded"
																		>
																			Reply
																		</a>
																	</p>
																</div>
															</li>
														</ul>
													</li>
												</ul>
											</li>
										</ul>
									</li>

									<li className="comment">
										<div className="vcard">
											<img
												src="images/person_1.jpg"
												alt="Image placeholder"
											/>
										</div>
										<div className="comment-body">
											<h3>Jean Doe</h3>
											<div className="meta">January 9, 2018 at 2:21pm</div>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Pariatur quidem laborum necessitatibus, ipsam
												impedit vitae autem, eum officia, fugiat saepe enim
												sapiente iste iure! Quam voluptas earum impedit
												necessitatibus, nihil?
											</p>
											<p>
												<a
													href="#"
													className="reply rounded"
												>
													Reply
												</a>
											</p>
										</div>
									</li>
								</ul>
								<CommentForm />
							</div>
						</div>

						{/* <!-- END main-content --> */}

						<div className="col-md-12 col-lg-4 sidebar">
							<SidebarSearch />
							<SidebarBio />
							<SidebarPopularPosts />
							<SidebarCategories />
							<SidebarTags />
						</div>
						{/* <!-- END sidebar --> */}
					</div>
				</div>
			</section>
			<MoreBlogPosts />
			<Footer />
		</>
	);
}
export default Single;
