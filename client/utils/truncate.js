function truncate(p) {
	if (p.length > 100) {
		return p.substring(0, 97) + "...";
	} else {
		return p;
	}
}

export default truncate;
