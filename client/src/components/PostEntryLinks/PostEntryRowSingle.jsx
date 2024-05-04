import { Link } from "react-router-dom";

const PostEntryRowSingle = () => {
	return (
		<div className="col-md-6 col-lg-3">
			<div className="blog-entry">
				<Link
					to="single.html"
					className="img-link"
				>
					<img
						src="images/img_1_horizontal.jpg"
						alt="Image"
						className="img-fluid"
					/>
				</Link>
				<span className="date">Apr. 14th, 2022</span>
				<h2>
					<Link to="single.html">
						Thought you loved Python? Wait until you meet Rust
					</Link>
				</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				<p>
					<Link
						to="#"
						className="read-more"
					>
						Continue Reading
					</Link>
				</p>
			</div>
		</div>
	);
};

export default PostEntryRowSingle;
