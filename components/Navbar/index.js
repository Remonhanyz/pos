import React from "react";
import styles from "./index.module.scss";
import { HiHome } from "react-icons/hi";
import {FiSettings} from "react-icons/fi";
const Navbar = () => {
	return (
		<div className={`${styles.container} container text-center`}>
			<div className={`h-100 d-flex flex-column align-items-start`}>
				<div
					className={`${styles.logo} d-flex flex-column align-items-center w-100`}
				>
					LOGO
				</div>
				<div
					className={`${styles.item} ${styles.active} d-flex flex-column align-items-center w-100`}
				>
					<HiHome size={25} /> Home
				</div>
				<div
					className={`${styles.item} d-flex flex-column align-items-center w-100`}
				>
					<HiHome size={25} />
					Menu
				</div>
				<div
					className={`${styles.item} d-flex flex-column align-items-center w-100`}
				>
					<HiHome size={25} />
					Orders
				</div>
				<div
					className={`${styles.item} d-flex flex-column align-items-center w-100`}
				>
					<FiSettings size={18} />
					Settings
				</div>
				<div
					className={`${styles.logout} align-self-end d-flex flex-column justify-content-center align-items-center mt-auto w-100`}
				>
					<HiHome size={25} />
					Logout
				</div>
			</div>
		</div>
	);
};

export default Navbar;
