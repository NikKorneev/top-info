"use client";
import { searchGlobal } from "@/lib/actions";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { SearchForm } from "./searchForm";

const Search = () => {
	const [opened, setOpened] = useState(false);
	const [query, setQuery] = useState("");
	const [debounced, setDebounced] = useState("");
	const [items, setItems] = useState([]);

	const handleSearch = async (val: string) => {
		const res = await searchGlobal(val);
		setItems(res);
	};

	useEffect(() => {
		const delay = setTimeout(() => {
			setDebounced(query);
		}, 300);
		return () => clearTimeout(delay);
	}, [query]);

	useEffect(() => {
		handleSearch(debounced);
	}, [debounced]);

	return (
		<div className="relative">
			<div
				className="cursor-pointer hover:*:animate-bounce"
				onClick={() => {
					setOpened(true);
				}}
			>
				<Image
					src="/icons/search.svg"
					width={20}
					height={20}
					alt="search icon"
					className="text-amber-50"
				/>
			</div>
			<AnimatePresence>
				{opened && (
					<div className="fixed top-0 left-0 right-0 bottom-0">
						<motion.div
							initial={{ y: -400, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -400, opacity: 0 }}
							className="relative  w-[100dvw] h-[400px] bg-mainYellow z-50"
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
							className="relative left-[50%] translate-x-[-50%] z-50 inline-flex flex-col pt-10 items-center overflow-scroll h-[40vh]"
						>
							{items?.map((item) => (
								<Link
									href={`/${item._type === "duoMember" ? "duo" + "/" + item.slug.current : item._type == "song" ? "album" + "/" + item?.album?.slug?.current : item._type + "/" + item.slug.current}`}
									key={item._id}
									className="bg-white flex justify-between w-[45vw] py-5 px-4 cursor-pointer hover:bg-yellow-200 hover:text-black transition-all"
								>
									<p>{item.title || item.name}</p>
									<p>
										{item._type == "duoMember"
											? "bio"
											: item._type}
									</p>
								</Link>
							))}
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
