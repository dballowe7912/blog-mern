import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import truncate from "../../utils/truncate";
import formatDate from "../../utils/formatDate";

function BlogEntry({ blog }) {
	const { _id, title, body, date, image, category } = blog;
	return (
		<div className="blog-entry d-flex blog-entry-search-item">
			<Link
				to={`/single/${_id}`}
				className="img-link me-4"
			>
				<img
					src={image}
					// TODO set alt image descriptor
					alt="Image"
					className="img-fluid"
				/>
			</Link>
			<div>
				<span className="date">
					{formatDate(date)} &#8226;{" "}
					<Link to={`/blogs/category/${category}`}>{category}</Link>
				</span>
				<h2>
					<Link to={`/single/${_id}`}>{title}</Link>
				</h2>
				<p>{truncate(body)}</p>
				<p>
					<Link
						to={`/single/${_id}`}
						className="btn btn-sm btn-outline-primary"
					>
						Read More
					</Link>
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
