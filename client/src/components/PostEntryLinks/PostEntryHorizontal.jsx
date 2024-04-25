import PropTypes from "prop-types";

function PostEntryHorizontal({ blog }) {
	console.log(blog);
	if (!blog) return "Loading...";
	const { _id: id, title, date } = blog;
	return (
		<a
			href={`/single/${id}`}
			className="h-entry mb-30 v-height gradient"
		>
			<div
				className="featured-img"
				style={{
					backgroundImage: "url('images/img_2_horizontal.jpg')",
				}}
			></div>

			<div className="text">
				<span className="date">{date}</span>
				<h2>{title}</h2>
			</div>
		</a>
	);
}

const propTypes = {
	blog: PropTypes.object,
};

PostEntryHorizontal.propTypes = propTypes;

export default PostEntryHorizontal;
