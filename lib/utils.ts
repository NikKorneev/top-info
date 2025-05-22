import { SearchedType } from "@/types/searched";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function round(num: number, fix = 2) {
	return parseFloat(num.toFixed(fix));
}

export function distance(x1: number, y1: number, x2: number, y2: number) {
	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

export function setLink(item: SearchedType) {
	return `/${item._type === "duoMember" ? "duo" + "/" + item.slug.current : item._type == "song" ? "albums" + "/" + item?.album?.slug?.current + "/?slug=" + item.slug.current : item._type + "s/" + item.slug.current}`;
}
