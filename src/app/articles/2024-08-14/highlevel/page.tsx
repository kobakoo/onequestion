"use client";
import type React from "react";
import { useState, useEffect } from "react";
import Heading from "@/app/components/Heading";
import Template from "@/app/layouts/Template";
import { InlineMath } from "react-katex";
import Alert from "@mui/material/Alert";

import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Katex from "@/app/components/Katex";

function AnswerAndExplanation({
	answer,
	explanation,
}: { answer: string; explanation: string | TrustedHTML }) {
	const [expanded, setExpanded] = useState<string | false>(false);
	const handleChange =
		(panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	return (
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
						<Typography sx={{ width: "33%", flexShrink: 0 }}>解答</Typography>
						{/* <Typography sx={{ color: "text.secondary" }}>
        I am an accordion
      </Typography> */}
					</AccordionSummary>
					<AccordionDetails>
						{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
						<InlineMath>{answer}</InlineMath>
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
						<div dangerouslySetInnerHTML={{ __html: explanation }} />
					</AccordionDetails>
				</Accordion>
			</div>
		</>
	);
}

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
			<Template
				title={"2010 (名前は伏せときます)高校 ハイレベル問題>数学"}
				createdAt={"2024-08-14"}
			>
				<p className="mx-5 mb-5">
					今日は1941年にチャーチル英首相とルーズベルト米大統領が大西洋憲章を発表した日です。主に第二次大戦と戦後の世界秩序についての構想が盛り込まれており、戦後の国際連合憲章の基礎となりました。
				</p>
				<Alert severity="error">
					<strong>
						未学習の内容(円周角と中心角、三平方の定理)を含みます。
					</strong>
					未学習の人はやらなくて大丈夫です。
				</Alert>
				<Image
					src="/2024-08-14 問題.jpg"
					alt="2024-08-14 問題.jpg"
					width={260}
					height={450}
					className="mx-auto max-h-64 w-auto mt-6"
				/>
				<Heading>4️⃣</Heading>
				<p className="">
					　上図のように、半円<InlineMath>O</InlineMath>を，点
					<InlineMath>A</InlineMath>を中心として反時計回りに
					<InlineMath>22.5°</InlineMath>回転させた図形を半円
					<InlineMath>{`O^{\\prime}`}</InlineMath>とする。斜線部分の面積
					<InlineMath>S</InlineMath>を求めよ。
					<br />
					　ただし，二つの半円の半径は
					<Katex
						equation={`
              r=2\\sqrt{2}(\\sqrt{2}-1)
            `}
					></Katex>
					とする。
				</p>

				<AnswerAndExplanation
					answer="3\pi-2\sqrt{2}\pi+6\sqrt2-8"
					explanation={`
            <p>画像が見にくかったらごめんなさい。保存したり、拡大したりしてみて見てください。</p>
            <p class="my-3">ちなみにこの問題は開成高校の問題です☆</p>
            <p class="mb-2"><strong class="text-red-400 underline mr-2">ポイント！</strong>計算をしない！　楽をする！</p>
          <img src="/2024-08-14 解説.jpg" alt="2024-08-14 解説.jpg" class="w-full" />
          `}
				/>
			</Template>
		</>
	);
}

export default ArticleTemplate;
