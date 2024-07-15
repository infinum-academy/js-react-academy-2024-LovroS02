'use client';

import { swrKeys } from "@/fetchers/swrKeys";
import { mutate } from "swr";

export const LogoutForm = () => {
	localStorage.removeItem('authorization-header');
	mutate(swrKeys.signIn);

	return <></>;
};
