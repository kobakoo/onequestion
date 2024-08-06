"use client";
import type React from "react";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Alert from "@mui/material/Alert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Heading from "@/app/components/Heading";
import { InlineMath, BlockMath } from "react-katex";

function AnswerAndExplanation({
	answer,
	explanation,
}: { answer: string | TrustedHTML; explanation: string | TrustedHTML }) {
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
						<div dangerouslySetInnerHTML={{ __html: answer }} />
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

export default AnswerAndExplanation;
