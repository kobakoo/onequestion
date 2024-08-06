import React from "react";
import Template from "@/app/layouts/Template";
import Katex from "@/app/components/Katex";
import AnswerAndExplanation from "@/app/components/AnswerAndExplanation";
import { InlineMath, BlockMath } from "react-katex";

function Page() {
	return (
		<>
			<Template title="2021 慶應義塾高校> 1️⃣ >(2)" createdAt="2024-08-07">
				<p>
					今日は立秋。ここで一句（唐突）
					<br />
					<a
						href="https://www.ebc.co.jp/haiku/backnumber/?ym=202308#08"
						target="_blank"
						className="hover:underline"
					>
						立秋の紺落ち付くや伊予絣（いよかすり）　夏目漱石
					</a>
				</p>
				<div className="flex gap-0 items-center">
					<h2 className="text-blue-500 text-2xl font-bold ml-1 mr-1">(2)</h2>
					<Katex
						equation={`
            (2021-x)(2022-x)=2023-x
              `}
					/>
				</div>
				<p>
					この時の<InlineMath>x</InlineMath>を求めよ。
				</p>
				<AnswerAndExplanation
					answer='<p class="font-mono">x=2021±√2</p>'
					explanation={`
            <p class="mb-2"><strong class="text-red-400 underline mr-2">ポイント！</strong>似ている形は文字に置く！</p>
          <img src="/2024-08-06 解説.png" alt="2024-08-06 解説.png" class="w-full" />
          `}
				/>
			</Template>
		</>
	);
}

export default Page;
