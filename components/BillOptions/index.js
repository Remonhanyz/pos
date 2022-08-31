import React from "react";
import styles from "./index.module.scss";
import {BsPrinterFill} from "react-icons/bs";
import {MdDelete} from "react-icons/md";
import {TbDiscount2} from "react-icons/tb";
import {useDispatch} from "react-redux";
import {setPrintState} from "../../redux-state/reducer/printReducer";

const BillOptions = ({}) => {
	const dispatch = useDispatch();
	const handlePrint = () => {
		dispatch(setPrintState(true));
	};

	return (
		<div
			className={`${styles.container} d-flex mx-1 justify-content-between my-2`}
		>
			<button
				className={`${styles.button} d-flex flex-column align-items-center justify-content-center`}
			>
				<MdDelete fontSize={30} />
				Delete
			</button>{" "}
			<button
				className={`${styles.button} d-flex flex-column align-items-center justify-content-center`}
			>
				<TbDiscount2 fontSize={30} />
				Discount
			</button>{" "}
			<button
				className={`${styles.button} d-flex flex-column align-items-center justify-content-center`}
				onClick={() => handlePrint()}
			>
				<BsPrinterFill fontSize={30} />
				Print
			</button>
		</div>
	);
};

export default BillOptions;
