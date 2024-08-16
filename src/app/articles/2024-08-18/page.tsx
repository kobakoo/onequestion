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
	title: "2009 筑波大学附属駒場高等学校>社会>4️⃣>2",
	createdAt: "2024-08-18",
	questionHeading: "2(改題)",
	question:
		"大恐慌（=世界恐慌）は、ニューヨークにおける「ある出来事」をきっかけにおこった。その出来事を6字以内で書き、それより後におこったことを、次のアからケまでの中からすべて選び、その記号を書きなさい。",
	answer: "出来事：（例）「暗黒の木曜日」、「株価の大暴落」、記号：ア,ウ,カ,キ",
	explanation: `1929年10月24日，アメリカのニューヨーク株式市場で株価が大暴落し，これをきっかけに世界恐慌が始まった。アは1933年、ウは1932年以降、カとキは1932年の出来事である。なお、イは
1920年，工は1917～22年，才は1919年、クは1918年、ケは1921年と1922年の出来事。`,
} as ArticleData;

const selections = [
	"ア ドイツで、ヒトラーの率いるナチスが政権を握った",
	"イ 国際連盟が結成された。",
	"ウ イギリスやフランスがブロック経済を実行した。",
	"エ ロシアで革命がおこり、ソビエト連邦が誕生した。",
	"オ 中国で五・四運動がおこった。",
	"力 満州国が建国された。",
	"キ 日本で五・一五事件がおこった。",
	"ク 日本で米騒動がおこった",
	"ケ 日本労働総同盟や日本農民組合が結成された。",
];
function ArticleTemplate() {
	return (
		<>
			<Template title={data.title} createdAt={data.createdAt}>
				<p>
					今日は1945年に皇帝溥儀が退位し満州国が消滅した日です。また、1944年の今日には第二次世界大戦・パリの解放が行われました。
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
