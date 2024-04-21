import GridSingle from "../components/GridSingle";
import PropTypes from "prop-types";

const PostsEntryGrid = ({ blogs }) => {
	return (
		<section className="section">
			<div className="container">
				<div className="row mb-4">
					<div className="col-sm-6">
						{/* TODO maybe add a dropdown to select category? */}
						<h2 className="posts-entry-title">Politics</h2>
					</div>
					<div className="col-sm-6 text-sm-end">
						<a
							href="category.html"
							className="read-more"
						>
							View All
						</a>
					</div>
				</div>

				<div className="row">
					{blogs.map((blog) => (
						<GridSingle
							key={blog._id}
							blog={blog}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
const propTypes = {
	blogs: PropTypes.array,
};

PostsEntryGrid.propTypes = propTypes;

export default PostsEntryGrid;
