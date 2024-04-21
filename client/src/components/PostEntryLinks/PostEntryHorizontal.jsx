function PostEntryHorizontal() {
	return (
		<a
			href="single.html"
			className="h-entry mb-30 v-height gradient"
		>
			<div
				className="featured-img"
				style={{
					backgroundImage: "url('images/img_2_horizontal.jpg')",
				}}
			></div>

			<div className="text">
				<span className="date">Apr. 14th, 2022</span>
				<h2>AI can now kill those annoying cookie pop-ups</h2>
			</div>
		</a>
	);
}
export default PostEntryHorizontal;
