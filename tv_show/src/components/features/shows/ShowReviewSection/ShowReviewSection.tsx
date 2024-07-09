import { IReview, IReviewList } from '@/typings/review';
import { IShow } from '@/typings/show';
import { Fragment, useEffect, useState } from 'react';
import { ReviewList } from '../../review/ReviewList/ReviewList';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { Flex, Heading, Spinner } from '@chakra-ui/react';
import { ShowDetails } from '../ShowDetails/ShowDetails';
import { useParams } from 'next/navigation';
import useSWR from 'swr';
import { getShow } from '@/fetchers/show';

const mockReviewList: IReviewList = {
	reviews: [],
};

export const ShowReviewSection = () => {
	const params = useParams();

	const [reviewList, setReviewList] = useState(mockReviewList);

	// useEffect(() => {
	// 	const loadedReviewList = loadFromLocalStorage();

	// 	setReviewList(loadedReviewList);
	// }, []);

	const { data, isLoading, error } = useSWR(`/shows/${params.id}`, () => getShow(params.id as string));

	if (error) {
		return <div>Ups...something went wrong</div>;
	}

	if (isLoading || !data) {
		return <Spinner thickness="8px" emptyColor="white" color="darkblue" boxSize={100} mx="50%"></Spinner>;
	}

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

		setReviewList(newReviewList);
		saveToLocalStorage(newReviewList);
	};

	const addReview = (review: IReview) => {
		const newReviewList = {
			reviews: [...reviewList.reviews, review],
		};

		setReviewList(newReviewList);
		saveToLocalStorage(newReviewList);
	};

	return (
		<Fragment>
			<Flex direction="column" maxW="80%" ml="20%" bg="darkblue" padding={6}>
				<ShowDetails show={data}></ShowDetails>
				<ReviewForm addShowReview={addReview}></ReviewForm>
				<ReviewList reviewList={reviewList} onDeleteReview={onDeleteReview}></ReviewList>
			</Flex>
		</Fragment>
	);
};
