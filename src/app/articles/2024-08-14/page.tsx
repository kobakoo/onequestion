"use client";
import type React from "react";
import { useState, useEffect } from "react";
import Heading from "@/app/components/Heading";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Template from "@/app/layouts/Template";
import AnswerAndExplanation from "@/app/components/AnswerAndExplanation";

type ArticleData = {
	title: string;
	createdAt: string;
	questionHeading: string;
	question: string;
	answer: string | TrustedHTML;
	explanation: string | TrustedHTML;
};

const data = {
	title: "2011 開成高校>社会>2️⃣>問5",
	createdAt: "2024-08-14",
	questionHeading: "問5",
	question:
		"日本がかかわった下のア〜オの戦争を，はじまった年の順に正しく並びかえなさい。",
	answer: "エ 日清戦争→イ 日露戦争→ウ 第一次世界大戦→オ 日中戦争→ア 太平洋戦争",
	explanation: `
  流れを抑えましょう。\
  日清戦争で日本が勝利し下関条約を結んで賠償金をがっぽりもらいました。これにより、戦争に良いイメージができ、日露戦争に結びつきました。しかし、日露戦争では賠償金を得ることができませんでした。\
  その後、第一次世界大戦が勃発しました。\
  そして、盧溝橋事件をきっかけに日中戦争が勃発しました。日中戦争は大いに長引き、その後始まるアジア・太平洋戦争が終わるまでつづきました。\
  `,
} as ArticleData;

const selections = [
	"ア　太平洋戦争",
	"イ　日露戦争",
	"ウ　第一次世界大戦",
	"エ　日清戦争",
	"オ　日中戦争",
];

function ArticleTemplate() {
	return (
		<>
			<Template title={data.title} createdAt={data.createdAt}>
				<Heading>{data.questionHeading}</Heading>
				<div className="mx-5 mt-3">
					<p dangerouslySetInnerHTML={{ __html: data.question as any }}></p>
				</div>
				<div className="mx-6">
					{/*!問題内容*/}
					<List dense={false}>
						{selections.map((item, index) => (
							<ListItem key={index}>
								<ListItemText primary={item} />
							</ListItem>
						))}
					</List>
				</div>

				<AnswerAndExplanation
					answer={data.answer}
					explanation={data.explanation as any}
				/>
			</Template>
		</>
	);
}

export default ArticleTemplate;
