import { render, screen } from '@testing-library/react';
import { ReviewItem } from './ReviewItem';

describe('ReviewItem', () => {
	const mockReview = { email: 'test@gmail.com', avatar: '', rating: 0, comment: 'test test test' };

	it('should render review/user email', () => {
		render(<ReviewItem review={mockReview} onDelete={() => {}} />);

		const userEmail = screen.getByText(mockReview.email);
		expect(userEmail).toBeInTheDocument();
		expect(userEmail).toHaveTextContent(mockReview.email);
	});

	it('should render review rating', () => {
		render(<ReviewItem review={mockReview} onDelete={() => {}} />);

		const rating = screen.getByRole('textbox');
		expect(rating).toBeInTheDocument();
		expect(rating).toHaveValue(mockReview.rating + ' / 5');
	});

	it('should render review comment', () => {
		render(<ReviewItem review={mockReview} onDelete={() => {}} />);

		const comment = screen.getByText(mockReview.comment);
		expect(comment).toBeInTheDocument();
		expect(comment).toHaveTextContent(mockReview.comment);
	});

	it('should render delete Button', () => {
		render(<ReviewItem review={mockReview} onDelete={() => {}} />);

		const deleteButton = screen.getByRole('button');
		expect(deleteButton).toBeInTheDocument();
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
