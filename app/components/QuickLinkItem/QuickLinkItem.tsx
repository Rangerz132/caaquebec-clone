import React from "react";
import styles from "./QuickLinkItem.module.scss";
import Text from "@/app/components/ui/Text/Text";
import Image from "next/image";

type QuickLinkItemProps = {
	title: string;
	description: string;
	image: {
		src: string;
		alt: string;
	};
};

function QuickLinkItem(props: QuickLinkItemProps) {
	return (
		<div className={styles["quick-link-item"]}>
			<div className={styles["image-container"]}>
				<Image
					width={200}
					height={200}
					src={props.image.src}
					alt={props.image.alt}
				/>
			</div>
			<div className={styles["content"]}>
				<Text tag="h4">{props.title}</Text>
				<Text tag="p">{props.description}</Text>
			</div>
		</div>
	);
}

export default QuickLinkItem;
