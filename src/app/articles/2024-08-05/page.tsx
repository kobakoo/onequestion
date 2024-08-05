"use client";
import type React from "react";
import { useState, useEffect } from "react";
import ArticleLayout from "../../layouts/ArticleLayout";
import Heading from "@/app/components/Heading";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Alert from "@mui/material/Alert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Page() {
	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setIsClient(true);
		}, 500);
	}, []);
	const [expanded, setExpanded] = useState<string | false>(false);

	const handleChange =
		(panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	return (
		<div>
			{isClient ? (
				<ArticleLayout
					className="max-w-md m-auto bg-blue-100/50 min-h-screen shadow-sm"
					title="2019 開成高校>社会>問15"
					createdAt="2024-08-05"
				>
					<Heading>問15</Heading>
					<div className="mx-5 mt-3">
						<p>
							戦時体制のもとで労働力や物資について述べた文として
							<strong>誤っているもの</strong>
							を、次のア～エから一つ選び、記号で答えなさい。
						</p>
					</div>
					<div className="mx-6">
						<List dense={false}>
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
						</List>
					</div>

					<Heading>解答解説</Heading>
					<div className="mx-4 my-4">
						<Alert severity="error">
							一回考えてから以下の解答を見てください！
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
								<Typography>
									ア、新たに結成された大政翼賛会が、労働力や物資を動員できるようになった。
								</Typography>
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
									解説
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									因果関係が間違っています。1940年にほとんどの政党や政治団体が解散して大政翼賛会が結成され、国民の国家総動員が固められました。しかし、それ以前の1938年にすでに国家総動員法が制定されており、労働力や物資の動員が可能であったため、誤りです。
								</Typography>
							</AccordionDetails>
						</Accordion>
					</div>
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

export default Page;
