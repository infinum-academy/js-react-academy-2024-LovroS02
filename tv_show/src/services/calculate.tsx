import { IReview, IReviewList } from "@/typings/review";

export const calculateAverageRating = (rl: IReviewList) => {
	let avg = 0;
	rl.reviews.forEach((review: IReview) => {
		avg += review.rating;
	});

	return parseFloat((avg / rl.reviews.length).toPrecision(2)) || 0;
};
