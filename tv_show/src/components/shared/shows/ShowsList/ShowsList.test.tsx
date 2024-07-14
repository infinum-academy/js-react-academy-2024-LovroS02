import { render, screen } from '@testing-library/react';
import { ShowsList } from './ShowsList';

describe('ShowsList', () => {
	const mockShows = [
		{
			title: 'test',
			description: 'test test test',
			id: '100',
			image_url: 'https://fakeimg.pl/600x400',
			average_rating: 0 || null || undefined,
			no_of_reviews: 0,
		},
		{
			title: 'test',
			description: 'test test test',
			id: '100',
			image_url: 'https://fakeimg.pl/600x400',
			average_rating: 4,
			no_of_reviews: 0,
		},
	];

	it('should render all provided shows', () => {
		render(<ShowsList shows={mockShows} />);

		expect(screen.getAllByRole('link').length).toEqual(mockShows.length);
	});
});
