const PostEntryRowSingle = () => {
	return (
		<div className="col-md-6 col-lg-3">
			<div className="blog-entry">
				<a
					href="single.html"
					className="img-link"
				>
					<img
						src="images/img_1_horizontal.jpg"
						alt="Image"
						className="img-fluid"
					/>
				</a>
				<span className="date">Apr. 14th, 2022</span>
				<h2>
					<a href="single.html">
						Thought you loved Python? Wait until you meet Rust
					</a>
				</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				<p>
					<a
						href="#"
						className="read-more"
					>
						Continue Reading
					</a>
				</p>
			</div>
		</div>
	);
};
export default PostEntryRowSingle;
