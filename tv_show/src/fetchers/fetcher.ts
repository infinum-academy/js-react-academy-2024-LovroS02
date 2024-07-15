export async function fetcher<T>(input: string | URL | globalThis.Request, init?: RequestInit): Promise<T> {
	try {
		const authorizationHeader = JSON.parse(localStorage.getItem('authorization-header') || '');

		const response = await fetch(input, {
			headers: {
				client: authorizationHeader.client,
				'access-token': authorizationHeader.accessToken,
				uid: authorizationHeader.uid,
			},
			...init,
		});
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		throw new Error(`Response status: ${error}`);
	}
}
