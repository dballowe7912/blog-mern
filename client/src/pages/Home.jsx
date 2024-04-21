import MobileNav from "../components/MobileNav";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Retro from "../layouts/Retro";
import PostsEntryLeft from "../layouts/PostsEntryLeft";
import PostsEntryRow from "../layouts/PostsEntryRow";
import PostsEntryRight from "../layouts/PostsEntryRight";
import PostsEntryGrid from "../layouts/PostsEntryGrid";
import PostsEntryAbstract from "../layouts/PostsEntryAbstract";
import { useContext } from "react";
import { BlogContext } from "../context/BlogState/BlogContext";

function Home() {
	const blogs = useContext(BlogContext);
	return (
		<>
			<MobileNav />
			<Navbar />
			<Retro />
			<PostsEntryLeft />
			<PostsEntryRow />
			<PostsEntryRight />
			<PostsEntryGrid blogs={blogs} />
			<PostsEntryAbstract />
			<Footer />
			{/* <Preloader /> */}
		</>
	);
}
export default Home;
