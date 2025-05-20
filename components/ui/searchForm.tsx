"use client";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";

export const SearchForm = ({
	isLoading,
	query,
	setQuery,
	handleSearch,
}: {
	query: string;
	isLoading: boolean;
	setQuery: (query: string) => void;
	handleSearch: (val: string) => void;
}) => {
	return (
		<form
			action={(data) => {
				setQuery(data.get("q") as string);
				handleSearch(data.get("q") as string);
			}}
			className="absolute top-1/2 left-1/2 -translate-x-1/2 h-[50px] -translate-y-1/2 flex items-center max-sm:w-[90vw]"
		>
			<input
				type="text"
				name="q"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				className="bg-white h-full px-4 py-2 text-[16px] w-[45vw] max-md:w-[90vw] max-sm:w-full focus:border-mainRed"
			/>
			<div className="bg-mainRed transition-all h-full w-[50px] cursor-pointer  hover:grayscale-100 items-center justify-center flex">
				<button type="submit" disabled={isLoading}>
					{isLoading ? (
						<AiOutlineLoading3Quarters
							size={30}
							className="animate-spin"
						/>
					) : (
						<IoIosSearch size={30} className=" text-mainYellow" />
					)}
				</button>
			</div>
		</form>
	);
};
