import PropTypes from "prop-types";
import formatDate from "../../../utils/formatDate";
import { Link } from "react-router-dom";
import Preloader from "../Preloader";

function PostEntryHorizontal({ blog }) {
	if (blog) {
		const { _id: id, title, date, image } = blog;
		return (
			<Link
				to={`/single/${id}`}
				className="h-entry mb-30 v-height gradient"
			>
				<div
					className="featured-img"
					style={{
						backgroundImage: `url(${image})`,
					}}
				></div>

				<div className="text">
					<span className="date">{formatDate(date)}</span>
					<h2>{title}</h2>
				</div>
			</Link>
		);
	} else {
		return <Preloader />;
	}
}

const propTypes = {
	blog: PropTypes.object,
};

PostEntryHorizontal.propTypes = propTypes;

export default PostEntryHorizontal;
