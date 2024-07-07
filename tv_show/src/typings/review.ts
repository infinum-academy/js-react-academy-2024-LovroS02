export interface IReview {
    email: string;
    avatar: string;
    rating: number;
    comment: string;
}

export interface IReviewList {
    reviews: Array<IReview>;
}