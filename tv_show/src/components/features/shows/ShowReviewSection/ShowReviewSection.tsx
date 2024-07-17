import { IReview, IReviewList } from '@/typings/review';
import { IShow } from '@/typings/show';
import { Fragment, useEffect, useState } from 'react';
import { ReviewList } from '../../review/ReviewList/ReviewList';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { Flex, Spinner } from '@chakra-ui/react';
import { ShowDetails } from '../ShowDetails/ShowDetails';
import { useParams } from 'next/navigation';
import useSWR from 'swr';
import { WarningIcon } from '@chakra-ui/icons';
import { swrKeys } from '@/fetchers/swrKeys';
import { fetcher } from '@/fetchers/fetcher';

const mockReviewList: IReviewList = {
	reviews: [],
};

interface IShowReviewResponse {
	show: IShow;
}

export const ShowReviewSection = () => {
	const params = useParams();

	const { data, isLoading, error } = useSWR<IShowReviewResponse>(`${swrKeys.allShows}/${params.id}`, fetcher);

	const [reviewList, setReviewList] = useState(mockReviewList);

	const loadFromLocalStorage = (id: string) => {
		const reviewListString = localStorage.getItem(`reviewlist-${id}`);
		if (!reviewListString) {
			return reviewList;
		}

		return JSON.parse(reviewListString);
	};

	useEffect(() => {
		const loadedReviewList = loadFromLocalStorage(params.id as string);
		setReviewList(loadedReviewList);
	}, [data]);

	if (error) {
		return <WarningIcon color="white" boxSize={100} mx="50%" />;
	}

	if (isLoading || !data) {
		return <Spinner thickness="8px" emptyColor="darkblue" color="white" boxSize={100} mx="50%" />;
	}

	const saveToLocalStorage = (reviewList: IReviewList, id: string) => {
		localStorage.setItem(`reviewlist-${id}`, JSON.stringify(reviewList));
	};

	const onDeleteReview = (reviewToRemove: IReview) => {
		const newReviewList = {
			reviews: reviewList.reviews.filter((review) => review !== reviewToRemove),
		};

		setReviewList(newReviewList);
		saveToLocalStorage(newReviewList, params.id as string);
	};

	const addReview = (review: IReview) => {
		const newReviewList = {
			reviews: [...reviewList.reviews, review],
		};

		setReviewList(newReviewList);
		saveToLocalStorage(newReviewList, params.id as string);
	};

	return (
		<Fragment>
			<Flex direction="column" bg="darkblue" padding={6}>
				{data && <ShowDetails show={data.show} />}
				<ReviewForm addShowReview={addReview} />
				<ReviewList reviewList={reviewList} onDeleteReview={onDeleteReview} />
			</Flex>
		</Fragment>
	);
};
