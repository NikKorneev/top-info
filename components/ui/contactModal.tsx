"use client";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "./button";

const ContactModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [email, setEmail] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [message, setMessage] = useState("");
	const t = useTranslations("ContactModal");

	function closeModal() {
		setIsOpen(false);
		setEmail("");
		setMessage("");
	}
	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		e.stopPropagation();
		setIsLoading(true);
		const res = await fetch("/api/send-to-telegram", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, message }),
		});

		setIsLoading(false);
		if (res.ok) {
			setSuccess(true);
			setEmail("");
			setMessage("");
		}
	}

	return (
		<div className="relative">
			<Button
				onClick={() => setIsOpen(true)}
				className="px-10 py-6 text-[16px] hover:text-mainYellow border-mainRed bg-transparent border-2 text-mainRed font-martian uppercase"
			>
				{t("modalBtn")}
			</Button>
			<AnimatePresence>
				{isOpen && (
					<div className="fixed z-[5000] inset-0 flex items-center justify-center">
						<motion.div
							initial={{ opacity: 0, scale: 0.2 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.2 }}
							className="bg-zinc-700 z-[10] text-white px-4 py-8 rounded-xl max-w-md w-full shadow-lg relative"
						>
							<button
								onClick={closeModal}
								className="absolute top-2 right-3 text-zinc-400 hover:text-zinc-200"
							>
								&times;
							</button>
							<h2 className="text-xl font-semibold mb-4">
								{t("t")}
							</h2>
							<form onSubmit={handleSubmit} className="space-y-4">
								<div>
									<label className="block mb-1 text-sm font-medium">
										Email
									</label>
									<input
										type="email"
										value={email}
										onChange={(e) => {
											if (isLoading) return;
											setSuccess(false);
											setEmail(e.target.value);
										}}
										required
										className="w-full p-2  border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white"
									/>
								</div>
								<div>
									<label className="block mb-1 text-sm font-medium">
										{t("text")}
									</label>
									<textarea
										value={message}
										onChange={(e) => {
											if (isLoading) return;
											setSuccess(false);
											setMessage(e.target.value);
										}}
										required
										className="w-full p-2 h-24  border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white"
									></textarea>
								</div>
								<button
									type="submit"
									disabled={isLoading}
									className={clsx(
										"w-full py-4 bg-mainRed text-white hover:bg-mainYellow hover:text-black transition-all",
										"disabled:animate-pulse disabled:bg-neutral-500"
									)}
								>
									{!isLoading && !success && t("send")}
									{!isLoading && success && t("success")}
									{isLoading && t("loading")}
								</button>
							</form>
						</motion.div>
						<div
							onClick={closeModal}
							className="absolute inset-0 z-[5]  bg-black/10 backdrop-blur-sm"
						></div>
					</div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default ContactModal;
