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

type ArticleData = {
	title: string;
	createdAt: string;
	questionHeading: string;
	question: string;
	answer: string | TrustedHTML;
	explanation: string | TrustedHTML;
};

const data = {
	title: "H26 開成　1️⃣>(2)",
	createdAt: "2024-12-27",
	questionHeading: "(2)",
	answer: `1.2c-1　2.1+√2`,
	explanation: `
  <img src="/2024-12-27 解説.png"></img>
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
					<InlineMath math="y=x^2"></InlineMath>
					のグラフ上に５点A,B(-1,1),O(0,0),C,Dが図１のようある。2
					点A,Cのy座標は等しく， AD//BC である。
					<Image
						src="/2024-12-27 問題.png"
						alt="図１"
						className="max-w-full"
						width={300}
						height={500}
					/>
					<ol className=" list-decimal">
						<li>Cのx 座標をcとするとき， Dのx座標をcを用いて表せ。</li>
						<li>△OAD:△OBC=7:1であるとき，Cのx座標を求めよ。</li>
					</ol>
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

				<AnswerAndExplanation
					answer={data.answer}
					explanation={data.explanation}
				/>
			</Template>
		</>
	);
}

export default ArticleTemplate;
