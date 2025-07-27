import React from "react";
import QuickLinkItem from "@/app/components/QuickLinkItem/QuickLinkItem";
import styles from "./QuickLinkList.module.scss";
import Heading, { HeadingProps } from "../ui/Heading/Heading";

type QuickLinkListProps = {
	heading: HeadingProps;
};

export default function QuickLinkList(props: QuickLinkListProps) {
	return (
		<>
			{props.heading && <Heading {...props.heading} />}
			<div className={styles["quick-link-list"]}>
				<QuickLinkItem
					title={"Assurances"}
					description={"Protégez votre famille et vos biens."}
					image={{ src: "/images/insurance_1.jpg", alt: "insurance_1" }}
				/>
				<QuickLinkItem
					title={"Voyage"}
					description={"Planifiez votre prochain voyage."}
					image={{ src: "/images/insurance_2.jpg", alt: "insurance_2" }}
				/>
				<QuickLinkItem
					title={"Mobilité"}
					description={"Déplacez-vous en toute quiétude."}
					image={{ src: "/images/insurance_3.jpg", alt: "insurance_3" }}
				/>
				<QuickLinkItem
					title={"Habitation"}
					description={"Prenez soin de votre foyer."}
					image={{ src: "/images/insurance_4.jpg", alt: "insurance_4" }}
				/>
			</div>
		</>
	);
}
