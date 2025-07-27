import React from "react";
import styles from "./Heading.module.scss";
import Text from "@/app/components/ui/Text/Text";

export type HeadingProps = {
	title: string;
	description?: string;
};

function Heading(props: HeadingProps) {
	return (
		<div className={styles["heading"]}>
			<Text tag="h2">{props.title}</Text>
			{props.description && <Text tag="p">{props.description}</Text>}
		</div>
	);
}

export default Heading;
