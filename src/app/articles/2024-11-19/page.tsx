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
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type ArticleData = {
	title: string;
	createdAt: string;
	questionHeading: string;
	question: string;
	answer: string | TrustedHTML;
	explanation: string | TrustedHTML;
};

const data = {
	title: "H19 筑波大附属駒場高校>数学>1️⃣",
	createdAt: "2024-11-19",
	questionHeading: "(1)",
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
				<p className="my-3 mx-5">
					直線<InlineMath>y=2x+2</InlineMath>上を動く点
					<InlineMath>P</InlineMath>と<InlineMath>x</InlineMath>軸上を動く点
					<InlineMath>Q</InlineMath>があります。<InlineMath>P</InlineMath>は点
					<InlineMath>(0,2)</InlineMath>を、<InlineMath>Q</InlineMath>は原点
					<InlineMath>O</InlineMath>を同時に出発します。動き始めてから
					<InlineMath>t</InlineMath>秒後の<InlineMath>P,Q</InlineMath>の
					<InlineMath>x</InlineMath>座標がそれぞれ
					<InlineMath>t,3t</InlineMath>
					であるとき、次の問いに答えなさい。ただし、
					<InlineMath>t≧0</InlineMath>で座標の１目盛りは
					<InlineMath>1cm</InlineMath>とします。
				</p>
				<Image
					src="/2024-11-19 問題.png"
					alt="2024-11-19 問題.png"
					width={260}
					height={450}
					className="mx-auto max-h-64 w-auto mt-6"
				/>
				<Heading>{data.questionHeading}</Heading>
				<div className="mx-5 mt-3">
					<p>
						<InlineMath>△OPQ</InlineMath>が<InlineMath>∠P=90°</InlineMath>
						の直角三角形になるのは出発してから何秒後ですか。
					</p>
				</div>
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
							<Typography sx={{ width: "33%", flexShrink: 0 }}>解答</Typography>
							{/* <Typography sx={{ color: "text.secondary" }}>
        I am an accordion
      </Typography> */}
						</AccordionSummary>
						<AccordionDetails>
							{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
							<InlineMath>2+2√2</InlineMath>秒後
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
							<Image
								src="/2024-11-19 解答.png"
								alt="2024-11-19 解答.png"
								width={260}
								height={500}
								className="mx-auto w-full mt-6"
							/>
						</AccordionDetails>
					</Accordion>
				</div>
			</Template>
		</>
	);
}

export default ArticleTemplate;
