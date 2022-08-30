import Image from "next/image";
import React from "react";
import styles from "./index.module.scss";

const OrderTypeItem = ({active, text, icon, setSelectedElement}) => {
	// setSelectedElement(icon);
	return (
		<button
			role={"button"}
			className={`me-4 ${styles.button} ${
				active && styles.activeButton
			} p-1 d-flex align-items-center`}
			onClick={() => {
				console.log(icon);
				setSelectedElement(text);
			}}
		>
			<div className={`${styles.icon} ${active && styles.activeIcon}`}>
				<Image src={icon} alt={`text`} />
			</div>
			<div
				className={`${styles.text} px-2 text-nowrap`}
			>
				{text}
			</div>
		</button>
	);
};

export default OrderTypeItem;
