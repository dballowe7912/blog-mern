const PostsEntryLarge = () => {
	return (
		<div className="col-md-6">
			<div className="blog-entry">
				<a
					href="single.html"
					className="img-link"
				>
					<img
						src="images/img_1_sq.jpg"
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
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis
					ea quis inventore vel voluptas.
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
	);
};
export default PostsEntryLarge;
