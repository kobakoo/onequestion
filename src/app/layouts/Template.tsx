"use client";
import type React from "react";
import { useState, useEffect } from "react";
import ArticleLayout from "@/app/layouts/ArticleLayout";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Template({
	children,
	title,
	createdAt,
}: { children: React.ReactNode; title: string; createdAt: string }) {
	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<div>
			{isClient ? (
				<ArticleLayout
					className="max-w-md m-auto bg-blue-100/50 min-h-screen shadow-sm"
					title={title}
					createdAt={createdAt}
				>
					{children}
				</ArticleLayout>
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

export default Template;
