interface props {
	email: string;
	password: string;
	confirmation_password?: string;
}

export async function mutator(url: string, { arg }: { arg: props }) {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
			Accept: 'applicaton/json',
		},
		body: JSON.stringify(arg),
	});

	if (!response.ok) {
		throw new Error(`Failed to mutate on ${url}`);
	}

	const client = response.headers.get('client');
	const accessToken = response.headers.get('access-token');
	const uid = response.headers.get('uid');

	return await { response: response.json(), client, accessToken, uid };
}
