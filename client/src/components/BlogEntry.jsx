import truncate from "../../utils/truncate";
import formatDate from "../../utils/formatDate";
import PropTypes from "prop-types";

function BlogEntry({ blog }) {
	const { _id, title, body, date, image, category } = blog;
	return (
		<div className="blog-entry d-flex blog-entry-search-item">
			<a
				href={`/single/${_id}`}
				className="img-link me-4"
			>
				<img
					src={image}
					// TODO set alt image descriptor
					alt="Image"
					className="img-fluid"
				/>
			</a>
			<div>
				<span className="date">
					{formatDate(date)} &#8226;{" "}
					<a href={`/blogs/category/${category}`}>{category}</a>
				</span>
				<h2>
					<a href={`/single/${_id}`}>{title}</a>
				</h2>
				<p>{truncate(body)}</p>
				<p>
					<a
						href={`/single/${_id}`}
						className="btn btn-sm btn-outline-primary"
					>
						Read More
					</a>
				</p>
			</div>
		</div>
	);
}

const propTypes = {
	blog: PropTypes.object,
};

BlogEntry.propTypes = propTypes;

export default BlogEntry;
