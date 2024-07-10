import { render, screen } from '@testing-library/react';
import { ShowCard } from './ShowCard';

describe('ShowCard', () => {
	const mockShow = {
		title: 'test',
		description: 'test test test',
		id: '100',
		image_url: 'test.png',
		average_rating: 0,
		no_of_reviews: 0,
	};

	it('should contain Image element with provided url', () => {
		render(<ShowCard show={mockShow} />);

		const image = screen.getByRole('img');
		expect(image).toBeInTheDocument();
	});

	it('should render show title', () => {
		render(<ShowCard show={mockShow} />);

		const heading = screen.getByRole('heading');
		expect(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent(mockShow.title);
	});

	it('should render show average rating', () => {
		render(<ShowCard show={mockShow} />);

		const checkAverageRating = (rating?: number) => {
			if (rating !== undefined && rating !== 0 && rating !== null) {
				return rating + ' / 5';
			}
			return 'no rating';
		};

		const text = screen.getByRole('paragraph');
		expect(text).toBeInTheDocument();
		expect(text).toHaveTextContent(checkAverageRating(mockShow.average_rating));
	});
});
