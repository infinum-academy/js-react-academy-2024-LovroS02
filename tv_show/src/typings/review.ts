export interface IReview {
    email: string;
    avatar: string;
    rating: Number;
    comment: string;
}

export interface IReviewList {
    reviews: Array<IReview>;
}