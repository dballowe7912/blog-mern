function formatDate(date) {
	let formattedDate = new Date(date);
	const month = formattedDate.getMonth() + 1;
	const day = formattedDate.getDate();
	const year = formattedDate.getFullYear();
	const dateString = `${month}-${day}-${year}`;
	return dateString;
}

export default formatDate;
