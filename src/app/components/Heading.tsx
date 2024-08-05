import type React from "react";

function Heading({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<h2 className="text-blue-500 text-2xl font-bold mx-5 mt-7">{children}</h2>
	);
}

export default Heading;
