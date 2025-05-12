import { useRouter, useSearchParams } from "next/navigation";

export const useUrlParams = (name: string, initial: string) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const setParam = (value: string = initial) => {
		const params = new URLSearchParams(searchParams?.toString());
		params.set(name, value);

		router.push(`?${params.toString()}`, { scroll: false });
	};

	return { setParam, searchParams, router };
};
