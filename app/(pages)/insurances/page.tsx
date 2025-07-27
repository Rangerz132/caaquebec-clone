import React from "react";
import Container from "@/app/components/ui/Container/Container";
import QuickLinkList from "@/app/components/QuickLinkList/QuickLinkList";

export default function InsurancePage() {
	return (
		<>
			<Container>
				<QuickLinkList
					heading={{
						title: "Un large éventail de services et d’avantages",
					}}
				></QuickLinkList>
			</Container>
		</>
	);
}
