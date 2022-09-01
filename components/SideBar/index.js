import React from "react";
import styles from "./index.module.scss";
import {IoIosArrowDropright, IoIosArrowDroprightCircle} from "react-icons/io";
import {RiArrowRightSLine} from "react-icons/ri";
import { setPrintState } from "../../redux-state/reducer/printReducer";
import { useDispatch } from "react-redux";
const SideBar = () => {
    	const dispatch = useDispatch();

	return (
		<div
			className={`${styles.container} position-relative d-flex align-items-center`}
		>
			<button className={`position-absolute ${styles.arrow} `} onClick={()=>dispatch(setPrintState(false))}>
				<RiArrowRightSLine fontSize={25} color={"#000000"} />
			</button>
		</div>
	);
};

export default SideBar;
