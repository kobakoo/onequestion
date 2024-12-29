"use client";
import type React from "react";
import { useState, useEffect } from "react";
import Heading from "@/app/components/Heading";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Template from "@/app/layouts/Template";
import AnswerAndExplanation from "@/app/components/AnswerAndExplanation";
import { InlineMath } from "react-katex";
import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Alert from "@mui/material/Alert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

type ArticleData = {
	title: string;
	createdAt: string;
	questionHeading: string;
	question: string;
	answer: string | TrustedHTML;
	explanation: string | TrustedHTML;
};

const data = {
	title: "2020 渋幕　1️⃣>(3)",
	createdAt: "2024-12-26",
	questionHeading: "(3)",
	explanation: `
  <img src="/2024-12-28 解説.png"></img>
  `,
} as ArticleData;

function ArticleTemplate() {
	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true);
	}, []);
	const [expanded, setExpanded] = useState<string | false>(false);

	const handleChange =
		(panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};
	return (
		<>
			<Template title={data.title} createdAt={data.createdAt}>
				<Heading>{data.questionHeading}</Heading>
				<div className="mx-5 mt-3">
					図のようにABを直径とする円Oにおいて， OA=3, BC=4, BD=2
					であるとき，△BCD の面積を求めなさい。
				</div>
				<Image
					src="/2024-12-28 問題.png"
					alt="円"
					className="max-w-full"
					width={500}
					height={500}
				/>
				<div className="mx-6">
					{/*!問題内容*/}
					{/* <List dense={false}>
						<ListItem>
							<ListItemText primary="ア、 新たに結成された大政翼賛会が、労働力や物資を動員できるようになった。" />
						</ListItem>
						<ListItem>
							<ListItemText primary="イ、軍需品の生産が優先されたため、農村では労働力や肥料が不足した。" />
						</ListItem>
						<ListItem>
							<ListItemText primary="ウ、生活必需品の供給が減り、マッチや衣料品で切符制が導入された。" />
						</ListItem>
						<ListItem>
							<ListItemText primary="エ、労働力が不足したため、中学生や未婚の女性も勤労動員の対象となった。" />
						</ListItem>
					</List> */}
				</div>

				<>
					<Heading>解答解説</Heading>
					<div className="mx-4 my-4">
						<Alert severity="error">
							一回考えて答えを書いてから以下の解答を見てください！
						</Alert>
					</div>
					<div className="mx-4">
						<Accordion
							expanded={expanded === "panel1"}
							onChange={handleChange("panel1")}
						>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1bh-content"
								id="panel1bh-header"
							>
								<Typography sx={{ width: "33%", flexShrink: 0 }}>
									解答
								</Typography>
								{/* <Typography sx={{ color: "text.secondary" }}>
        I am an accordion
      </Typography> */}
							</AccordionSummary>
							<AccordionDetails>
								{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
								<InlineMath
									math={"\\frac{16\\sqrt{2}+4\\sqrt{5}}{9}"}
								></InlineMath>
							</AccordionDetails>
						</Accordion>
						<Accordion
							expanded={expanded === "panel2"}
							onChange={handleChange("panel2")}
						>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel2bh-content"
								id="panel2bh-header"
							>
								<Typography sx={{ width: "33%", flexShrink: 0 }}>
									解説・解法
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
								<div dangerouslySetInnerHTML={{ __html: data.explanation }} />
							</AccordionDetails>
						</Accordion>
					</div>
				</>
			</Template>
		</>
	);
}

export default ArticleTemplate;
