import MobileNav from "../components/MobileNav";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Retro from "../layouts/Retro";
import PostsEntryLeft from "../layouts/PostsEntryLeft";
import PostsEntryRow from "../layouts/PostsEntryRow";
import PostsEntryRight from "../layouts/PostsEntryRight";
import PostsEntryGrid from "../layouts/PostsEntryGrid";
import PostsEntryAbstract from "../layouts/PostsEntryAbstract";
function Home() {
	return (
		<>
			<MobileNav />
			<Navbar />
			<Retro />
			<PostsEntryLeft />
			<PostsEntryRow />
			<PostsEntryRight />
			<PostsEntryGrid />
			<PostsEntryAbstract />
			<Footer />
			{/* <Preloader /> */}
		</>
	);
}
export default Home;
{
	/* <MobileNav />
			<Navbar />
			<Retroy />
			<PostsEntryLeft />
			<PostsEntryRow />
			<PostsEntryRight />
			<PostsEntryGrid />
			<PostsEntryAbstract />
			<Footer /> */
}
{
	/* <Preloader /> */
}
