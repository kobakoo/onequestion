import type React from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

function Katex({ equation = "" }: { equation?: string }) {
	return (
		<>
			<BlockMath math={equation} errorColor={"#cc0000"} />
		</>
	);
}

export default Katex;
