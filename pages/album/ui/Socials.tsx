import Image from "next/image";
import { FaSpotify } from "react-icons/fa";
import { RiSoundcloudLine } from "react-icons/ri";
import { SiApplemusic, SiYoutubemusic } from "react-icons/si";
type Props = {
	spotify: string;
	apple: string;
	youtube: string;
	soundcloud: string;
	yandex: string;
};

const Socials = ({ apple, spotify, soundcloud, yandex, youtube }: Props) => {
	return (
		<div className="flex gap-4 text-white py-4 text-4xl items-center justify-center border-2 border-mainYellow bg-neutral-600">
			{spotify && (
				<a href={spotify} target="_blank">
					<FaSpotify color="#23CF5F" />
				</a>
			)}
			{apple && (
				<a href={apple} target="_blank">
					<SiApplemusic color="#FE516A" />
				</a>
			)}
			{soundcloud && (
				<a href={soundcloud} target="_blank">
					<RiSoundcloudLine />
				</a>
			)}

			{youtube && (
				<a href={youtube} target="_blank">
					<SiYoutubemusic color="red" />
				</a>
			)}
			{yandex && (
				<a href={yandex} target="_blank">
					<Image
						src="/icons/yandex-music-seeklogo.svg"
						alt="yandex"
						width={30}
						height={30}
					/>
				</a>
			)}
		</div>
	);
};

export default Socials;
