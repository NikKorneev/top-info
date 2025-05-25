import { useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useTransition } from "react";

export const useUrlParams = (name: string, initial: string) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [isPending, startTransition] = useTransition();

	const setParam = (value: string = initial) => {
		startTransition(() => {
			const params = new URLSearchParams(searchParams?.toString());
			params.set(name, value);

			router.replace(`?${params.toString()}`, { scroll: false });
		});
	};

	return { setParam, searchParams, router, isPending };
};
