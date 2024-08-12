import type React from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

function Katex({ equation = "" }: { equation?: string }) {
	return (
		<div className="max-w-full">
			<BlockMath math={equation} errorColor={"#cc0000"} />
		</div>
	);
}

export default Katex;
