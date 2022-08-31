import React from "react";
import Navbar from "./Navbar";
import styles from "./Layout.module.scss";
import {motion} from "framer-motion";

const Layout = ({children}) => {
	const variants = {
		hidden: {opacity: 0, x: 300, y: 0},
		enter: {opacity: 1, x: 0, y: 0},
		exit: {opacity: 0, x: 0, y: 0}
	};
	return (
		<div className={`${styles.container}`}>
			<Navbar />
			<motion.main
				className={`${styles.main}`}
				variants={variants}
				initial="hidden" // Set the initial state to variants.hidden
				animate="enter" // Animated state to variants.enter
				exit="exit" // Exit state (used later) to variants.
				transition={{type: "linear"}} // Set the transition to linear
			>
				<div className={`h-100 ${styles.bg}`}>{children}</div>
			</motion.main>
		</div>
	);
};

export default Layout;
