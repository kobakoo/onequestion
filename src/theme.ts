"use client";
import { BIZ_UDGothic } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const bizUDGothic = BIZ_UDGothic({
	weight: ["400", "700"],
	subsets: ["latin"],
	display: "swap",
});

const theme = createTheme({
	typography: {
		fontFamily: bizUDGothic.style.fontFamily,
	},
});

export default theme;
