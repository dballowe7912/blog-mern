import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import truncate from "../../utils/truncate";
import formatDate from "../../utils/formatDate";

const GridSingle = ({ blog }) => {
	const { _id: id, image, title, author, date, body } = blog;
	return (
		<div className="col-lg-4 mb-4">
			<div className="post-entry-alt">
				<Link
					to={`/single/${id}`}
					className="img-link"
				>
					<img
						src={image}
						alt="Image"
						className="img-fluid"
					/>
				</Link>
				<div className="excerpt">
					<h2>
						<Link to={`/single/${id}`}>{title}</Link>
					</h2>
					<div className="post-meta align-items-center text-left clearfix">
						<figure className="author-figure mb-0 me-3 float-start">
							<img
								// TODO add profile pictures in user model
								src="images/person_1.jpg"
								alt="Image"
								className="img-fluid"
							/>
						</figure>
						<span className="d-inline-block mt-1">
							{/* TODO link to author profile */}
							By <Link to="#">{author}</Link>
						</span>
						<span>&nbsp;-&nbsp; {formatDate(date)}</span>
					</div>

					<p>{truncate(body)}</p>
					<p>
						<Link
							to={`/single/${id}`}
							className="read-more"
						>
							Continue Reading
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

const propTypes = {
	blog: PropTypes.object,
};

GridSingle.propTypes = propTypes;

export default GridSingle;
