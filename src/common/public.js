export const turnhtml = (str) => {
	var arrEntities = {
		lt: "<",
		gt: ">",
		nbsp: "&nbsp;",
		amp: "&",
		quot: '"'
	};
	return str.replace(/&(lt|gt|nbsp|amp|quot|p);/gi, function(all, t) {
		return arrEntities[t];
	});
}