import PostEntryHorizontal from "../components/PostEntryLinks/PostEntryHorizontal";
import PostEntryVertical from "../components/PostEntryLinks/PostEntryVertical";

function Retro() {
	return (
		<section className="section bg-light">
			<div className="container">
				<div className="row align-items-stretch retro-layout">
					<div className="col-md-4">
						<PostEntryHorizontal />
						<PostEntryHorizontal />
					</div>
					<div className="col-md-4">
						<PostEntryVertical />
					</div>
					<div className="col-md-4">
						<PostEntryHorizontal />
						<PostEntryHorizontal />
					</div>
				</div>
			</div>
		</section>
	);
}
export default Retro;
