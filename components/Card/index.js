import React from "react";
import styles from "./index.module.scss";

const Card = ({style, margin, children}) => {
	return (
		<div style={{padding: margin}}>
			<div className={`container ${styles.container}`} style={style}>
				<div>{children}</div>
			</div>
		</div>
	);
};

export default Card;
