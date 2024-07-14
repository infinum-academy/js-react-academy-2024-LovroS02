import { render, screen } from '@testing-library/react';
import { ReviewItem } from './ReviewItem';

describe('ReviewItem', () => {
	const mockReview = { email: 'test@gmail.com', avatar: '', rating: 1, comment: 'test test test' };

	it('should render review/user email', () => {
		render(<ReviewItem review={mockReview} onDelete={() => {}} />);

		expect(screen.getByText(mockReview.email)).toBeInTheDocument();
	});

	it('should render review rating', () => {
		render(<ReviewItem review={mockReview} onDelete={() => {}} />);

		expect(screen.getByText(mockReview.rating + '/5')).toBeInTheDocument();
	});

	it('should render review comment', () => {
		render(<ReviewItem review={mockReview} onDelete={() => {}} />);

		expect(screen.getByText(mockReview.comment)).toBeInTheDocument();
	});

	it('should render delete Button', () => {
		render(<ReviewItem review={mockReview} onDelete={() => {}} />);

		expect(screen.getByRole('button')).toBeInTheDocument();
	});

	it('should call onDelete when delete button is clicked', () => {
        const mockOnDelete = jest.fn();
		render(<ReviewItem review={mockReview} onDelete={mockOnDelete} />);

		const deleteButton = screen.getByText('Remove');
		deleteButton.click();
		
		expect(mockOnDelete).toHaveBeenCalled();
        expect(mockOnDelete).toHaveBeenCalledTimes(1);
        expect(mockOnDelete).toHaveBeenCalledWith(mockReview);
	});
});
