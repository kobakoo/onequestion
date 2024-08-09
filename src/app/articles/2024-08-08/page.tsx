"use client";
import type React from "react";
import { useState, useEffect } from "react";
import Heading from "@/app/components/Heading";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Template from "@/app/layouts/Template";
import AnswerAndExplanation from "@/app/components/AnswerAndExplanation";
import Image from "next/image";

type ArticleData = {
	title: string;
	createdAt: string;
	questionHeading: { [key: string]: string };
	question: { [key: string]: string };
	answer: string | TrustedHTML;
	explanation: string | TrustedHTML;
};

const data = {
	title: "2019 筑波大附属高校>理科>5️⃣",
	createdAt: "2024-08-08",
	questionHeading: {
		2: "(2)（おまけ）",
		3: "(3) (本題)",
	},
	question: {
		2: "図1は、受粉後のサクラのめしべを示したものである。図中のA,Bの名称をそれぞれ漢字2文字で答えなさい",
		3: "図1のC,Dの細胞の染色体数、花以外の植物体を構成する細胞（これをEとする）の染色体数、およびAの壁を構成する細胞の染色体数はどのような関係になっているか。次のア〜キから正しいものを２つ選び、記号で答えよ。ただし、Cの細胞は花粉内の細胞が2つに分裂してできたものである。",
	},
	answer: "(2) A: 子房 B:胚珠<br/>(3)ア、エ",
	explanation: `(3) 文章が長いだけで基本的な問題です。<br/>＊以下は解説丸写し()<p class=" mt-3">ア…正しい。図1で，花粉管の中を胚珠へ向かって移動するCは精細胞，胚珠の中にあるDは卵細胞を表している。精細胞と卵細胞はどちらも生殖細胞で、その染色体数は体細胞の染色体数の半分である。よって、イ，ウは誤り。<br/> エ…正しい。Eは体細胞だから、その染 色体数は生殖細胞であるDの2倍、つまり、Dの染色体数はEの半分である。<br/>オ…誤り。A の子房の壁を構成する細胞は体細胞であるから、染色体数はEと同じである。よって、力も誤り。<br/> キ…誤り。Cの細胞2つの染色体数の合計は体細胞の染色体数と同じであるから、Cの細胞2つに Dの細胞1つを加えた染色体数の合計は、Eよりも多くなる（1.5倍になる）。</p><p class="mt-3">よくわかんない場合は↓</p><iframe width="300" height="170" src="https://www.youtube-nocookie.com/embed/04lACMuFq6g?si=pDq06qouSq5uWJgG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen  class="w-full"></iframe>`,
} as ArticleData;

const selections = [
	"ア　1つのCの染色体数は、Dの染色体数と同じである。",
	"イ　1つのCの染色体数は、Dの染色体数の半分である。",
	"ウ　Cの染色体数は、Eの染色体数の4分の1である。",
	"エ　Dの染色体数は、Eの染色体数の半分である。",
	"オ　Aの壁を構成する細胞の染色体数は、Eの染色体数の半分である。",
	"カ　Aの壁を構成する細胞の染色体数は、1つのCの染体数と同じである。",
	"キ　Cの細胞2つとDの細胞1つの染色体数の合計は、Eの染色体数と同じである。",
];

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
				<p className="mx-5 mb-5">
					今日は世阿彌忌。1444年頃に世阿弥が亡くなった日とされています。ということで、世阿弥の言葉から一つ紹介します。「
					<a
						href="https://www.the-noh.com/jp/zeami/words.html#word01"
						target="_blank"
						className="underline"
					>
						初心忘るべからず
					</a>
					」
				</p>
				<p className="mx-5">＊(2)は1年の復習。(3)はテスト範囲</p>
				<Image
					src="/2024-08-08 問題.png"
					alt="2024-08-08 問題.png"
					width={260}
					height={450}
					className="mx-auto max-h-64 w-auto mt-6"
				/>
				<Heading>{data.questionHeading["2"]}</Heading>
				<div className="mx-5 mt-3">
					<p
						dangerouslySetInnerHTML={{ __html: data.question["2"] as any }}
					></p>
				</div>
				<Heading>{data.questionHeading["3"]}</Heading>
				<div className="mx-5 mt-3">
					<p
						dangerouslySetInnerHTML={{ __html: data.question["3"] as any }}
					></p>
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
					answer={data.answer as any}
					explanation={data.explanation as any}
				/>
			</Template>
		</>
	);
}

export default ArticleTemplate;
