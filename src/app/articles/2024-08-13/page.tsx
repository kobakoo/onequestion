"use client";
import React from "react";
import Template from "@/app/layouts/Template";
import Katex from "@/app/components/Katex";

import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Heading from "@/app/components/Heading";

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

import { InlineMath } from "react-katex";
import Alert from "@mui/material/Alert";

function Page() {
	return (
		<>
			<Template title="2016 早稲田実業高等部>数学>1️⃣>(1)" createdAt="2024-08-13">
				<p className=" mt-3">
					今日は1965年に第58-60代内閣総理大臣の池田勇人氏が亡くなった日です。まだ授業ではやってませんが、第一回東京オリンピックを利用して国民所得倍増計画を実施し、高度経済成長期を築きました。
				</p>
				<div className=" mt-4">
					<Alert severity="info">
						今日のテーマは<b>式の工夫</b>
					</Alert>
				</div>
				<Katex
					equation={`
            (\\sqrt{7}-\\sqrt{5})^8(\\sqrt{7}+\\sqrt{5})^{10}-(\\sqrt{7}-\\sqrt{5})^{10}(\\sqrt{7}+\\sqrt{5})^8
                `}
				/>{" "}
				<p>を計算せよ。</p>
				<AnswerAndExplanation
					answer="1024\sqrt{35}"
					explanation={`
            <p>画像が見にくかったらごめんなさい。保存したり、拡大したりしてみて見てください。</p>
            <p class="mb-2"><strong class="text-red-400 underline mr-2">ポイント！</strong>計算をしない！　楽をする！</p>
          <img src="/2024-08-13 解説.png" alt="2024-08-13 解説.jpeg" class="w-full" />
          `}
				/>
			</Template>
		</>
	);
}

export default Page;
