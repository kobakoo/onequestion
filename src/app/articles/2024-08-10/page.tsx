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
	title: "2024 埼玉栄東高校（特待生）>社会>2️⃣>問9",
	createdAt: "2024-08-10",
	questionHeading: "問9",
	question:
		" 大正時代の日本に関する説明として正しいものを、次のア〜エから1つ選び，記号で答えなさい。",
	answer: "ウ",
	explanation: `
  <p>
   　義務教育が6年に変更されたのは明治時代なので、アは誤り。（また、戦後には1947年(昭和22年)の教育基本法と学校教育法では義務教育は<strong>9年</strong>と定められました。これでも誤りと言えます。）<br/>　日本の国際連盟の脱退と満州事変(1931)、五・一五事件(1932)らへんはセットで押さえておきましょう。1930年代はもうすでに昭和なのでイは誤りです。<br/>　大正時代は大正デモクラシーという活動が盛んに行われました。第一次護憲運動や第二次護憲運動など吉野作造が唱えた民本主義思想が元となっています。今回の普通選挙法の制定は第二次護憲運動の結果です。よって、ウが正解です。<br/>　エは日露戦争の講和条約（ポーツマス条約）の話です。話は正しいですが日露戦争は明治時代の話なので誤りです。
  </p>
  `,
} as ArticleData;

const selections = [
	"ア. 義務教育の年限が4年から6年に変更された。",
	"イ. 国際連盟の総会で満州（洲）国の建国が認められなかった日本は、国際連盟を脱退した。",
	"ウ. 加藤高明内閣が，満25歳以上の男子に選挙権を与える普通選挙法を成立させた。",
	"エ．ロシアが、韓国における日本の指導権を認めた。",
];

function ArticleTemplate() {
	return (
		<>
			<Template title={data.title} createdAt={data.createdAt}>
				<p>
					今日は8月10日です。1793年にフランス、パリでルーヴル美術館が開館しました。
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
