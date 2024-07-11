import { render, screen } from '@testing-library/react';
import { ReviewForm } from './ReviewForm';

describe('ReviewForm', () => {
	it('should render input comment', () => {
		render(<ReviewForm addShowReview={() => {}} />);

		expect(screen.getByRole('textbox')).toBeInTheDocument();
	});

	it('should render input rating', () => {
		render(<ReviewForm addShowReview={() => {}} />);

		expect(screen.getByText('Rating')).toBeInTheDocument();
	});

	it('should render button', () => {
		const mockAddShowReview = jest.fn();
		render(<ReviewForm addShowReview={mockAddShowReview} />);

		expect(screen.getByText('Post')).toBeInTheDocument();
	});
});
