import AlbumScrollLayout from "@/components/animated/albumScrollLayout";

const Layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<section className="relative overflow-hidden">
			<AlbumScrollLayout />

			{children}
		</section>
	);
};

export default Layout;
