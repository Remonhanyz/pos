import React from 'react'
import styles from "./index.module.scss";
import {BsPrinterFill} from 'react-icons/bs'
import {MdDelete} from "react-icons/md";
import {TbDiscount2} from "react-icons/tb";
const BillOptions = () => {
  return (
		<div className={`${styles.container} d-flex mx-1 justify-content-between my-2`}>
			<button
				className={`${styles.button} d-flex flex-column align-items-center justify-content-center`}
			>
				<MdDelete fontSize={35} />
				Delete
			</button>{" "}
			<button
				className={`${styles.button} d-flex flex-column align-items-center justify-content-center`}
			>
				<TbDiscount2 fontSize={35} />
				Discount
			</button>{" "}
			<button
				className={`${styles.button} d-flex flex-column align-items-center justify-content-center`}
			>
				<BsPrinterFill fontSize={35} />
				Print
			</button>
		</div>
  );
}

export default BillOptions