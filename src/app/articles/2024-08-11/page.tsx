import React from "react";
import Template from "@/app/layouts/Template";
import Katex from "@/app/components/Katex";
import AnswerAndExplanation from "@/app/components/AnswerAndExplanation";
import { InlineMath } from "react-katex";

function Page() {
	return (
		<>
			<Template
				title="2018 早稲田大本庄高等学院> 1️⃣ >問三"
				createdAt="2024-08-11"
			>
				<p>
					昨日、神宮外苑で花火大会があったらしいですね。行った人はいるのでしょうか。私の母は行ってました。
					<br />
					はい、どうでもいいですね。
				</p>
				<p className=" mt-3">
					今日は1833年に維新の三傑の一人、木戸孝允が亡くなった日です。
				</p>
				<p className=" mt-3">
					＊今日の問題は典型題です。できて損はないと思います。
				</p>
				<div className="flex gap-0 items-center">
					<h2 className="text-blue-500 text-2xl font-bold ml-1 mr-1">(2)</h2>
					<Katex
						equation={`
                8^{2018}
              `}
					/>
				</div>
				<p>の一の位を求めよ</p>
				<p>
					ヒント：<InlineMath>8^n</InlineMath>
					の一の位の数に何か規則性はあるかな？
				</p>
				<AnswerAndExplanation
					answer='<p class="font-mono">4</p>'
					explanation={`
            <p class="mb-2"><strong class="text-red-400 underline mr-2">ポイント！</strong>計算できないような指数の場合は規則性を活用する！</p>
          <img src="/2024-08-11 解説.png" alt="2024-08-11 解説.png" class="w-full" />
          `}
				/>
			</Template>
		</>
	);
}

export default Page;
