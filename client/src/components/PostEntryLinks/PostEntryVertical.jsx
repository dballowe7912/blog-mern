import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import formatDate from "../../../utils/formatDate";

function PostEntryVertical({ blog }) {
	const { _id: id, title, date, image } = blog;
	return (
		<Link
			to={`/single/${id}`}
			className="h-entry img-5 h-100 gradient"
		>
			<div
				className="featured-img"
				style={{ backgroundImage: `url(${image})` }}
			></div>

			<div className="text">
				<span className="date">{formatDate(date)}</span>
				<h2>{title}</h2>
			</div>
		</Link>
	);
}

const propTypes = {
	blog: PropTypes.object,
};

PostEntryVertical.propTypes = propTypes;

export default PostEntryVertical;
