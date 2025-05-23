"use client";
import { usePathname, useRouter } from "@/i18n/navigation";
import clsx from "clsx";
import { useParams } from "next/navigation";
import { ChangeEvent, ReactNode, useTransition } from "react";
type Props = {
	children: ReactNode;
	defaultValue: string;
	label: string;
};
const LocaleSwitcherSelect = ({ children, defaultValue, label }: Props) => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const pathname = usePathname();
	const params = useParams();

	function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
		const nextLocale = event.target.value;
		startTransition(() => {
			//@ts-expect-error should be fixed
			router.replace({ pathname, params }, { locale: nextLocale });
		});
	}
	return (
		<label
			className={clsx(
				"relative  cursor-pointer text-white",
				isPending && "transition-opacity [&:disabled]:opacity-30"
			)}
		>
			<p className="sr-only">{label}</p>
			<select
				className={clsx(
					"inline-flex text-white appearance-none bg-transparent py-3 pl-2 pr-6 cursor-pointer"
				)}
				defaultValue={defaultValue}
				onChange={onSelectChange}
				disabled={isPending}
			>
				{children}
			</select>
			<span className="pointer-events-none absolute right-2 top-[8px]">
				⌄
			</span>
		</label>
	);
};

export default LocaleSwitcherSelect;
