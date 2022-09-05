import Image from "next/image";
import React from "react";
import Card from "../Card";
import Logo from "../../public/images/Logo.svg";
import styles from "./index.module.scss";
import divider from "../../public/images/Line 12.svg";

const PrintableBillSummery = () => {
	return (
		<Card
			className="p-1"
			outerClassName={`d-flex align-items-center justify-content-center`}
		>
			<div className={`row text-center`}>
				<div className={`col-7 text-end p-0 pe-3`}>January 23, 2022</div>
				<div className={`col-5 text-start p-0`}>8:15pm</div>
			</div>
			<div className={`row align-items-center justify-content-center mb-3`}>
				Order Bill #1
			</div>
			<table className="table table-borderless my-3">
				<thead className="table-light">
					<tr>
						<td className={`${styles.table_header} ps-3`}>Item</td>
						<td className={`${styles.table_header}`}>Size</td>
						<td className={`${styles.table_header}`}>Qty</td>
						<td className={`${styles.table_header}`}>Price</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className={`col-5 ps-3`}>Fettuccine Chicken Alfredo</td>
						<td className={`col-2 ${styles.size}`}>M</td>
						<td className={`col-2 ${styles.quantity}`}>1x</td>
						<td className={`col-3  ${styles.price}`}>100 EGP</td>
					</tr>{" "}
					<tr>
						<td className={`col-5 ps-3`}>Fettuccine Chicken Alfredo</td>
						<td className={`col-2 ${styles.size}`}>M</td>
						<td className={`col-2 ${styles.quantity}`}>1x</td>
						<td className={`col-3  ${styles.price}`}>100 EGP</td>
					</tr>{" "}
					<tr>
						<td className={`col-5 ps-3`}>Fettuccine Chicken Alfredo</td>
						<td className={`col-2 ${styles.size}`}>M</td>
						<td className={`col-2 ${styles.quantity}`}>1x</td>
						<td className={`col-3  ${styles.price}`}>100 EGP</td>
					</tr>
				</tbody>
			</table>
		</Card>
	);
};

export default PrintableBillSummery;
