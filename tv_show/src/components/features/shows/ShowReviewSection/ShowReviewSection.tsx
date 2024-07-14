import { IReview, IReviewList } from '@/typings/review';
import { IShow } from '@/typings/show';
import { Fragment, useEffect, useState } from 'react';
import { ReviewList } from '../../review/ReviewList/ReviewList';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { Heading } from '@chakra-ui/react';
import { ShowDetails } from '../ShowDetails/ShowDetails';

const mockReviewList: IReviewList = {
	reviews: [],
};

const testShow: IShow = {
	imageUrl: 'Brooklyn_nine_nine.png',
	title: 'Brooklyn Nine-nine',
	averageRating: 0,
	description:
		"Comedy series following the exploits of Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPD's 99th Precinct.",
};

export const ShowReviewSection = () => {
	const [reviewList, setReviewList] = useState(mockReviewList);
	const [show, setShow] = useState(testShow);

	useEffect(() => {
		const loadedReviewList = loadFromLocalStorage();
		testShow.averageRating = calculateAverageRating(loadedReviewList);
		setShow(testShow);
		setReviewList(loadedReviewList);
	}, []);

	const saveToLocalStorage = (reviewList: IReviewList) => {
		localStorage.setItem('reviewlist', JSON.stringify(reviewList));
	};

	const loadFromLocalStorage = () => {
		const reviewListString = localStorage.getItem('reviewlist');
		if (!reviewListString) {
			return reviewList;
		}

		return JSON.parse(reviewListString);
	};

	const calculateAverageRating = (rl: IReviewList) => {
		let avg = 0;
		rl.reviews.forEach((review: IReview) => {
			avg += review.rating;
		});

		return parseFloat((avg / rl.reviews.length).toPrecision(2)) || 0;
	};

	const onDeleteReview = (reviewToRemove: IReview) => {
		const newReviewList = {
			reviews: reviewList.reviews.filter((review) => review !== reviewToRemove),
		};

		testShow.averageRating = calculateAverageRating(newReviewList);
		setShow(testShow);
		setReviewList(newReviewList);
		saveToLocalStorage(newReviewList);
	};

	const addReview = (review: IReview) => {
		const newReviewList = {
			reviews: [...reviewList.reviews, review],
		};

		testShow.averageRating = calculateAverageRating(newReviewList);
		setShow(testShow);
		setReviewList(newReviewList);
		saveToLocalStorage(newReviewList);
	};

	return (
		<Fragment>
			<Heading mb="20px" color="white" size="xl">
				TV Shows App
			</Heading>
			<ShowDetails show={show} />
			<ReviewForm addShowReview={addReview} />
			<ReviewList reviewList={reviewList} onDeleteReview={onDeleteReview} />
		</Fragment>
	);
};
