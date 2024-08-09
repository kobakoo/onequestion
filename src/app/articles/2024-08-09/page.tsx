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
	title: "2020 筑波大附属高校>社会>4️⃣>問一",
	createdAt: "2024-08-09",
	questionHeading: "(2) (改題)",
	question:
		"第一次世界大戦について述べた次のア〜カの中から正しいものを二つ選び記号で答えなさい。",
	answer: "ア、オ",
	explanation: `
  <p>なぜ間違っているかを主に取り上げます。<br/>イとエは第二次世界大戦の出来事なので違います。ウは三国同盟と三国協商が逆です。カはニューヨーク(アメリカ)ではなくジュネーヴ（スイス）が正しいです。ニューヨークは国際連"盟"ではなく国際連"合"の本部です。</p>
  `,
} as ArticleData;
const selections = [
	"ア．この戦争中に，日本は中国に対して二十一か条の要求を出して受け入れさせた。",
	"イ．ドイツによるポーランド侵攻が戦争のきっかけとなった。",
	"ウ．背景としてイギリスなど三国同盟と，ドイツなど三国協商の対立があった。",
	"エ．この戦争中にアウシュビッツなどの強制収容所で，多数のユダヤ人が殺害された。",
	"オ．パリでこの戦争の講和会議が開催され、日本も参加した。",
	"カ．戦争後、ウィルソンの提言でニューヨークを本部とする国際連盟が発足した。",
];

function ArticleTemplate() {
	return (
		<>
			<Template title={data.title} createdAt={data.createdAt}>
				<p>
					今日はながさき平和の日です。79年前に長崎に原子爆弾ファットマンが落とされました。
				</p>
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
					explanation={data.explanation}
				/>
			</Template>
		</>
	);
}

export default ArticleTemplate;
