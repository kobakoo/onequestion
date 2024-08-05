import type React from "react";
import Button from "@mui/material/Button";
import TagIcon from "@mui/icons-material/Tag";
import Image from "next/image";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import type { Metadata } from "next";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
	title: "Hoge Page",
	description: "Hoge Pageです。",
};

function ArticleLayout({
	children,
	className,
	title,
	createdAt,
}: {
	children: React.ReactNode;
	className: string;
	title: string;
	createdAt: string;
}) {
	const [url, setUrl] = useState("");
	useEffect(() => {
		const currentUrl = window.location.href;
		setUrl(currentUrl);
	}, []);
	return (
		<div className={`${className} max-w-md m-auto bg-blue-100/50 min-h-screen`}>
			<head>
				<meta name="viewport" content={"width=device-width, initial-scale=1"} />
				<title>{title}</title>
				<link href={url} rel="canonical" />
				<meta name="twitter:card" content={"summary_large_image"} />
				<meta property="og:title" content={title} />
				<meta property="og:url" content={url} />
				<meta name="description" content={"上位校への一問一答を掲載します。"} />
				<meta
					property="og:description"
					content={"上位校への一問一答を掲載します。"}
				/>
				<meta property="og:type" content={"website"} />
			</head>
			<header>
				<h1 className="sm:text-5xl text-4xl font-bold pt-8 mx-6 text-blue-500 text-center font-sans underline">
					一問一答
				</h1>
				<p className="text-blue-400 text-center font-mono text-lg mt-3">
					難しい学校への第一歩
				</p>
				<div className="text-center mt-3">
					<Button variant="contained" color="primary" href="/" hrefLang="ja">
						戻る
					</Button>
				</div>
			</header>
			<h1 className=" text-4xl font-bold mx-5 mt-7">
				<TagIcon className="mr-3" color="primary" fontSize="large" />
				{title}
			</h1>
			<div className="mx-5 mt-1 flex">
				<p className=" mr-1">
					<PermContactCalendarIcon fontSize="small" />
				</p>
				{createdAt}
			</div>
			<div className=" mx-7 mt-3 mb-7">{children}</div>
			<footer className=" bg-blue-800/10 py-6 rounded-t-sm">
				<Link href="https://notbyai.fyi/" target="_blank">
					<Image
						src="/Written-By-Human-Not-By-AI-Badge-white@2x.png"
						width={262}
						height={84}
						alt="Written-By-Human-Not-By-AI-Badge-white@2x.png"
						className="m-auto w-32 opacity-80"
					/>
				</Link>
				<div className="mx-auto text-center">
					<small className="font-sans text-sm text-blue-700">
						©kobako 2024
					</small>
				</div>
			</footer>
		</div>
	);
}

export default ArticleLayout;
