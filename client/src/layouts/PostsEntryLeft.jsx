import { Link } from "react-router-dom";
import PostsEntryLarge from "../components/PostEntryLinks/PostsEntryLarge";
import PostEntrySide from "../components/PostEntryLinks/PostEntrySide";

function PostsEntryLeft() {
	return (
		<section className="section posts-entry">
			<div className="container">
				<div className="row mb-4">
					<div className="col-sm-6">
						<h2 className="posts-entry-title">Business</h2>
					</div>
					<div className="col-sm-6 text-sm-end">
						<Link
							to="/category/business"
							className="read-more"
						>
							View All
						</Link>
					</div>
				</div>
				<div className="row g-3">
					<div className="col-md-9">
						<div className="row g-3">
							<PostsEntryLarge />
							<PostsEntryLarge />
						</div>
					</div>
					<div className="col-md-3">
						<ul className="list-unstyled blog-entry-sm">
							<PostEntrySide />
							<PostEntrySide />
							<PostEntrySide />
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default PostsEntryLeft;
