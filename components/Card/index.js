import React from "react";
import styles from "./index.module.scss";

const Card = ({style, margin, children, className}) => {
	return (
		<div style={{padding: margin}} className={`h-100`}>
			<div
				className={`container ${styles.container} ${className}`}
				style={style}
			>
				<div className={`w-100 h-100 row`}>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Card;
