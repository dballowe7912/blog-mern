import { useContext } from "react";
import { BlogContext } from "../context/BlogState/BlogContext";

import PostEntryHorizontal from "../components/PostEntryLinks/PostEntryHorizontal";
import PostEntryVertical from "../components/PostEntryLinks/PostEntryVertical";
function Retro() {
	const blogs = useContext(BlogContext);
	return (
		<section className="section bg-light">
			<div className="container">
				<div className="row align-items-stretch retro-layout">
					<div className="col-md-4">
						<PostEntryHorizontal blog={blogs[0]} />
						<PostEntryHorizontal blog={blogs[1]} />
					</div>
					<div className="col-md-4">
						<PostEntryVertical blog={blogs[2]} />
					</div>
					<div className="col-md-4">
						<PostEntryHorizontal blog={blogs[3]} />
						<PostEntryHorizontal blog={blogs[4]} />
					</div>
				</div>
			</div>
		</section>
	);
}
export default Retro;
