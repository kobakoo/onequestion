import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { BIZ_UDGothic } from "next/font/google";

const bizUDGothic = BIZ_UDGothic({
	weight: ["400", "700"],
	subsets: ["latin"],
});
// export const metadata: Metadata = {
// 	title: "一問一答",
// 	description: "一問一答",
// };

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja" className={`${bizUDGothic.className}`}>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=BIZ+UDGothic:wght@400;700&display=swap"
					rel="stylesheet"
				/>
				<meta name="robots" content="noindex" />
			</head>
			<body className={""}>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme}>{children}</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
