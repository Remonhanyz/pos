import React from "react";
import styles from "./index.module.scss";
import {HiHome, HiOutlineClipboardList} from "react-icons/hi";
import {IoLogOutOutline, IoFastFoodOutline} from "react-icons/io5";
import {FiSettings, } from "react-icons/fi";
const Navbar = () => {
	return (
		<div className={`${styles.container} container text-center`}>
			<div className={`h-100 d-flex flex-column align-items-start`}>
				<div
					role="button"
					className={`${styles.logo} d-flex flex-column align-items-center w-100`}
				>
					LOGO
				</div>
				<div
					role="button"
					className={`${styles.item} ${styles.active} d-flex flex-column align-items-center w-100`}
				>
					<HiHome size={25} /> Home
				</div>
				<div
					role="button"
					className={`${styles.item} d-flex flex-column align-items-center w-100`}
				>
					{/* <FontAwesomeIcon icon="fa-solid fa-bell-concierge" /> */}
					<IoFastFoodOutline size={25} />
					Menu
				</div>
				<div
					role="button"
					className={`${styles.item} d-flex flex-column align-items-center w-100`}
				>
					<HiOutlineClipboardList size={25} />
					Orders
				</div>
				<div
					role="button"
					className={`${styles.item} d-flex flex-column align-items-center w-100`}
				>
					<FiSettings size={18} />
					Settings
				</div>
				<div
					role="button"
					className={`${styles.logout} align-self-end d-flex flex-column justify-content-center align-items-center mt-auto w-100`}
				>
					<div style={{paddingLeft: 7}}>
						<IoLogOutOutline size={32} />
					</div>
					Logout
				</div>
			</div>
		</div>
	);
};

export default Navbar;
