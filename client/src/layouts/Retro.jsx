import PropTypes from "prop-types";
import Preloader from "../components/Preloader";

import PostEntryHorizontal from "../components/PostEntryLinks/PostEntryHorizontal";
import PostEntryVertical from "../components/PostEntryLinks/PostEntryVertical";
function Retro({ blogs }) {
	if (blogs) {
		return (
			<section className="section bg-light">
				<div className="container">
					<div className="row align-items-stretch retro-layout">
						<div className="col-md-4">
							<PostEntryHorizontal
								// key={blogs[0]._id}
								blog={blogs[0]}
							/>
							<PostEntryHorizontal
								// key={blogs[1]._id}
								blog={blogs[1]}
							/>
						</div>
						<div className="col-md-4">
							<PostEntryVertical
								// key={blogs[2]._id}
								blog={blogs[2]}
							/>
						</div>
						<div className="col-md-4">
							<PostEntryHorizontal
								// key={blogs[3]._id}
								blog={blogs[3]}
							/>
							<PostEntryHorizontal
								// key={blogs[4]._id}
								blog={blogs[4]}
							/>
						</div>
					</div>
				</div>
			</section>
		);
	}
	return <Preloader />;
}

const propTypes = {
	blogs: PropTypes.array,
};

Retro.propTypes = propTypes;

export default Retro;
