export function getParams(params, sign) {
	const postParams = new URLSearchParams();
	for (const [key, value] of Object.entries(params)) {
		postParams.append(key, value.toString());
	}
	postParams.append("sign", sign);
	return postParams;
}
