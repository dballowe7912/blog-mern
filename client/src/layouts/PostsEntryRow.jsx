import PostEntryRowSingle from "../components/PostEntryLinks/PostEntryRowSingle";

function PostsEntryRow() {
	return (
		<section className="section posts-entry posts-entry-sm bg-light">
			<div className="container">
				<div className="row">
					<PostEntryRowSingle />
					<PostEntryRowSingle />
					<PostEntryRowSingle />
					<PostEntryRowSingle />
				</div>
			</div>
		</section>
	);
}
export default PostsEntryRow;
