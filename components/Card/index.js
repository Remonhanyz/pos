import React from "react";
import styles from "./index.module.scss";

const Card = ({style, margin, children, className, outerClassName}) => {
	return (
		<div style={{padding: margin}} className={`${outerClassName} `}>
			<div
				className={`container ${styles.container} ${className}`}
				style={style}
			>
				<div className={`w-100 h-100 row d-flex justify-content-center p-0 m-0 `}>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Card;
