import React from "react";
import Navbar from "./Navbar";
import styles from "./Layout.module.scss";

const Layout = ({children}) => {
	return (
		<div className={`${styles.container}`}>
			<Navbar />
			<main className={`${styles.main}`}>
				<div className={`h-100 ${styles.bg}`}>{children}</div>
			</main>
		</div>
	);
};

export default Layout;
