"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Articles from "@/article.json";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Custom404() {
	const [isClient, setIsClient] = useState(false);
	const [url, setUrl] = useState("");
	useEffect(() => {
		const currentUrl = window.location.href;
		setUrl(currentUrl);
	}, []);
	useEffect(() => {
		setTimeout(() => {
			setIsClient(true);
		}, 500);
	}, []);
	// Sort articles by id
	Articles.sort((a, b) => b.id.localeCompare(a.id));
	return (
		<div>
			{isClient ? (
				<div className="max-w-md m-auto bg-blue-100/50 min-h-screen shadow-sm">
					<head>
						<meta
							name="viewport"
							content={"width=device-width, initial-scale=1"}
						/>
						<title>{"上位校への一問一答"}</title>
						<link href={url} rel="canonical" />
						<meta name="twitter:card" content={"summary_large_image"} />
						<meta property="og:title" content={"上位校への一問一答"} />
						<meta property="og:url" content={url} />
						<meta
							name="description"
							content={"上位校への一問一答を掲載します。"}
						/>
						<meta
							property="og:description"
							content={"上位校への一問一答を掲載します。"}
						/>
						<meta property="og:type" content={"website"} />
					</head>

					<div className={"-rotate-12 -translate-x-3 transition"}>
						<h1
							className={
								"sm:text-5xl text-4xl font-bold pt-8 mx-6 text-blue-500 text-center font-sans underline transition"
							}
						>
							一問一答
						</h1>
						<p className=" text-blue-400 text-center font-mono text-lg mt-3 transition">
							難しい学校への第一歩
							<br />
							<b className=" text-red-400">期間限定！テスト範囲から出題中</b>
						</p>
					</div>
					<div className="text-center mt-4">
						<Button variant="contained" color="primary" href="/" hrefLang="ja">
							戻る
						</Button>
					</div>
					<motion.div
						drag
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, easings: "easeInOut" }}
						dragConstraints={{
							top: -50,
							left: -50,
							right: 50,
							bottom: 50,
						}}
					>
						<span>
							<div className="w-full h-[300px] my-32 bg-[url('https://github.com/SAWARATSUKI/KawaiiLogos/blob/main/ResponseCode/404%20NotFound.png?raw=true')] bg-center bg-cover"></div>
						</span>
					</motion.div>
					<footer className=" bg-blue-800/10 py-6 rounded-t-sm mt-10">
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
							<p>
								過去問は
								<Link
									href="https://www.koenokyoikusha.co.jp/books/book_koukou"
									className=" text-orange-400 hover:underline transition"
									target="_blank"
								>
									声の教育者
								</Link>
								より引用
							</p>
						</div>
					</footer>
				</div>
			) : (
				<div>
					<Backdrop
						sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
						open={true}
					>
						<CircularProgress color="inherit" />
					</Backdrop>
				</div>
			)}
		</div>
	);
}
