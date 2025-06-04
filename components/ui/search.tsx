"use client";
import { Link } from "@/i18n/navigation";
import { searchGlobal } from "@/lib/actions";
import { setLink } from "@/lib/utils";
import { SearchedType } from "@/types/searched";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { SearchForm } from "./searchForm";

const Search = () => {
	const [opened, setOpened] = useState(false);
	const [query, setQuery] = useState("");
	const [debounced, setDebounced] = useState("");
	const [items, setItems] = useState<SearchedType[]>([]);

	const handleSearch = async (val: string) => {
		const res = await searchGlobal(val);
		setItems(res);
	};

	useEffect(() => {
		if (query.length > 100 || query.length < 2) return;
		const delay = setTimeout(() => {
			setDebounced(query);
		}, 200);
		return () => clearTimeout(delay);
	}, [query]);

	useEffect(() => {
		handleSearch(debounced);
	}, [debounced]);

	return (
		<div className="relative">
			<div
				className="cursor-pointer hover:*:scale-110 transition-all"
				onClick={() => {
					setOpened(true);
				}}
			>
				<IoIosSearch size={30} color="#ffd800" />
			</div>
			<AnimatePresence>
				{opened && (
					<div className="fixed top-0 left-0 right-0 bottom-0">
						<motion.div
							initial={{ y: -400, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -400, opacity: 0 }}
							className="relative  w-[100dvw] h-[400px] max-sm:h-[100px] bg-mainYellow z-[50]"
						>
							<div className="absolute cursor-pointer top-4 right-4">
								<IoMdClose
									onClick={() => setOpened(false)}
									size={50}
								/>
							</div>

							<SearchForm
								isLoading={false}
								query={query}
								setQuery={setQuery}
								handleSearch={handleSearch}
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="relative left-[50%] translate-x-[-50%] z-50 inline-flex flex-col pt-10 items-center overflow-scroll"
						>
							{items.length > 0 ? (
								items?.map((item) => (
									<Link
										onClick={() => setOpened(false)}
										href={setLink(item)}
										key={item._id}
										className="bg-white flex justify-between w-[45vw] max-md:w-[90vw] py-5 px-4 cursor-pointer hover:bg-yellow-200 hover:text-black transition-all"
									>
										<p>{item.title || item.name}</p>
										<p>
											{item._type == "duoMember"
												? "bio"
												: item._type ==
													  "interestingFact"
													? "fact"
													: item._type}
										</p>
									</Link>
								))
							) : query.length > 0 ? (
								<p className="text-xl text-white">No results</p>
							) : null}
						</motion.div>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ ease: "linear" }}
							onClick={() => setOpened(false)}
							className="fixed cursor-pointer backdrop-blur-sm top-0 left-0 w-[100dvw] h-[100dvh] bg-back/20"
						/>
					</div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Search;
