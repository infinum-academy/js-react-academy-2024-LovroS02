import { IReview, IReviewList } from '@/typings/review';
import { IShow } from '@/typings/show';
import { Fragment, useEffect, useState } from 'react';
import { ReviewList } from '../../review/ReviewList/ReviewList';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { Flex, Heading, Spinner } from '@chakra-ui/react';
import { ShowDetails } from '../ShowDetails/ShowDetails';
import { useParams, usePathname } from 'next/navigation';
import useSWR from 'swr';
import { getShow } from '@/fetchers/show';
import { WarningIcon } from '@chakra-ui/icons';

const mockReviewList: IReviewList = {
	reviews: [],
};

const mockShow: IShow = {
	id: '',
	image_url: '',
	title: '',
	description: '',
	average_rating: 0,
	no_of_reviews: 0,
};

export const ShowReviewSection = () => {
	const params = useParams();

	const { data, isLoading, error } = useSWR(`/shows/${params.id}`, () => getShow(params.id as string));

	const [reviewList, setReviewList] = useState(mockReviewList);
	const [show, setShow] = useState(mockShow);

	const loadFromLocalStorage = (id: string) => {
		const reviewListString = localStorage.getItem(`reviewlist-${id}`);
		if (!reviewListString) {
			return reviewList;
		}

		return JSON.parse(reviewListString);
	};

	useEffect(() => {
		const loadedReviewList = loadFromLocalStorage(params.id as string);
		if (data) {
			const newShow = { ...data, average_rating: calculateAverageRating(loadedReviewList) };
			setShow(newShow);
		}
		setReviewList(loadedReviewList);
	}, [data]);

	if (error) {
		return <WarningIcon color="white" boxSize={100} mx="50%" />;
	}

	if (isLoading || !data) {
		return <Spinner thickness="8px" emptyColor="darkblue" color="white" boxSize={100} mx="50%"></Spinner>;
	}

	const saveToLocalStorage = (reviewList: IReviewList, id: string) => {
		localStorage.setItem(`reviewlist-${id}`, JSON.stringify(reviewList));
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

		const newShow = { ...data, average_rating: calculateAverageRating(newReviewList) };
		setShow(newShow);
		setReviewList(newReviewList);
		saveToLocalStorage(newReviewList, params.id as string);
	};

	const addReview = (review: IReview) => {
		const newReviewList = {
			reviews: [...reviewList.reviews, review],
		};

		const newShow = { ...data, average_rating: calculateAverageRating(newReviewList) };
		setShow(newShow);
		setReviewList(newReviewList);
		saveToLocalStorage(newReviewList, params.id as string);
	};

	return (
		<Fragment>
			<Flex direction="column" bg="darkblue" padding={6}>
				<ShowDetails show={show} />
				<ReviewForm addShowReview={addReview} />
				<ReviewList reviewList={reviewList} onDeleteReview={onDeleteReview} />
			</Flex>
		</Fragment>
	);
};
