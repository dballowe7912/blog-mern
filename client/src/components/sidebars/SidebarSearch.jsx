function SidebarSearch() {
	return (
		<div className="sidebar-box search-form-wrap mb-4">
			<form
				action="#"
				className="sidebar-search-form"
			>
				<span className="bi-search"></span>
				<input
					type="text"
					className="form-control"
					id="s"
					placeholder="Type a keyword and hit enter"
				/>
			</form>
		</div>
	);
}
export default SidebarSearch;
