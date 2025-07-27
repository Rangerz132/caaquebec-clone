import React from "react";

type AllowedTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

type TextProps = {
	tag?: AllowedTags;
	children: React.ReactNode;
	className?: string;
};

export default function Text({
	tag: Tag = "p",
	children,
	className,
}: TextProps) {
	return <Tag className={className}>{children}</Tag>;
}
