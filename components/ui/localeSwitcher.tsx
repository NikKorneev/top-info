"use client";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/navigation";
import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const LocaleSwitcher = () => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const pathname = usePathname();
	const params = useParams();
	const t = useTranslations("LocaleSwitcher");
	const locale = useLocale();

	function handleClick(locale: "en" | "ru") {
		startTransition(() => {
			//@ts-expect-error should be fixed
			router.replace({ pathname, params }, { locale, scroll: false });
		});
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex gap-1 uppercase text-mainYellow font-martian items-center   cursor-pointer hover:text-mainYellow transition-colors">
				<span>{t("label")}</span> <MdKeyboardArrowDown size={24} />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="bg-back text-white text-[16px] font-martian ">
				<DropdownMenuLabel className="sr-only">
					{t("label")}
				</DropdownMenuLabel>
				<DropdownMenuItem
					disabled={isPending}
					className={clsx(
						locale == "en" && "bg-mainYellow text-black"
					)}
					onClick={() => handleClick("en")}
				>
					English
				</DropdownMenuItem>
				<DropdownMenuItem
					disabled={isPending}
					className={clsx(
						locale == "ru" && "bg-mainYellow text-black"
					)}
					onClick={() => handleClick("ru")}
				>
					Русский
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default LocaleSwitcher;
