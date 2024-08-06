"use client";
import type React from "react";
import { useState, useEffect } from "react";
import Heading from "@/app/components/Heading";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Template from "@/app/layouts/Template";
import AnswerAndExplanation from "@/app/components/AnswerAndExplanation";

function Page() {
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
			<Template title="2019 開成高校>社会>問15" createdAt="2024-08-06">
				<p>今日は広島平和記念日。原爆投下から７９年です。</p>
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

				<AnswerAndExplanation
					answer="ア、新たに結成された大政翼賛会が、労働力や物資を動員できるようになった。"
					explanation={`
          因果関係が間違っています。1940年にほとんどの政党や政治団体が解散して大政翼賛会が結成され、国民の国家総動員が固められました。しかし、それ以前の1938年にすでに国家総動員法が制定されており、労働力や物資の動員が可能であったため、誤りです。
          `}
				/>
			</Template>
		</>
	);
}

export default Page;
