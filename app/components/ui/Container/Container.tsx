import React from "react";
import styles from "./Container.module.scss";

export default function Container(props: { children: React.ReactNode }) {
	return <div className={styles["container"]}>{props.children}</div>;
}
