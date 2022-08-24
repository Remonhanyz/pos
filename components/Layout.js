import React from "react";
import Navbar from "./Navbar";
import styles from "./Layout.module.scss";

const Layout = ({children}) => {
	return (
		<div className={`${styles.container}`}>
			<Navbar />
			<main>{children}</main>
		</div>
	);
};

export default Layout;
