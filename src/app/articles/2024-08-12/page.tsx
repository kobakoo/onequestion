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
			<Template title="???? 早稲田大本庄高等学院" createdAt="2024-08-11">
				<p className=" mt-3">
					今日は1978年に日中平和友好条約が締結された日です。
				</p>
				<div className=" mt-4">
					<Alert severity="info">
						今日のテーマは<b>二次方程式の利用</b>・<b>解と係数です。</b>
					</Alert>
				</div>
				<p className="mt-3 mb-10">＊一応試験範囲（暴論）</p>
				<Katex
					equation={`
						(x-1)^2=12
							`}
				/>
				<p>
					の二つの解を<InlineMath>p,q</InlineMath>とするとき、
				</p>
				<Katex
					equation={`
						\\frac{(p+q)^2}{pq}
							`}
				/>
				<p>の値を求めなさい。</p>

				<AnswerAndExplanation
					answer="-\frac{4}{11}"
					explanation={`
            <p class="mb-2"><strong class="text-red-400 underline mr-2">ポイント！</strong>解と係数</p>
          <img src="/2024-08-12 解説.png" alt="2024-08-12 解説.png" class="w-full" />
          `}
				/>
			</Template>
		</>
	);
}

export default Page;
