import MobileNav from "./components/MobileNav";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Retroy from "./layouts/Retroy";
import PostsEntryLeft from "./layouts/PostsEntryLeft";
import PostsEntryRow from "./layouts/PostsEntryRow";
import PostsEntryRight from "./layouts/PostsEntryRight";
import PostsEntryGrid from "./layouts/PostsEntryGrid";
import PostsEntryAbstract from "./layouts/PostsEntryAbstract";
// import Preloader from "./components/Preloader";

function App() {
	return (
		<>
			<MobileNav />
			<Navbar />
			<Retroy />
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

export default App;
