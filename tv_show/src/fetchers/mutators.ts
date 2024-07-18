interface IProps {
	email: string;
	password: string;
	confirmation_password?: string;
}

export async function mutator(url: string, { arg }: { arg: IProps }) {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
			Accept: 'applicaton/json',
		},
		body: JSON.stringify(arg),
	});

	const client = response.headers.get('client');
	const accessToken = response.headers.get('access-token');
	const uid = response.headers.get('uid');

	if (!response.ok) {
		throw new Error(`Failed to mutate on ${url}`);
	}

	localStorage.setItem(
		'authorization-header',
		JSON.stringify({
			client,
			accessToken,
			uid,
		})
	);

	return await response.json();
}
