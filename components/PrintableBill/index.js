import Image from "next/image";
import React from "react";
import Card from "../Card";
import Logo from "../../public/images/Logo.svg";
import styles from "./index.module.scss";
import divider from "../../public/images/Line 12.svg";
const PrintableBill = () => {
	return (
		<Card margin={"0 1rem 0 1rem "} className="p-1">
			<div
				className={`row align-items-center justify-content-center mb-2 mt-3`}
			>
				<Image src={Logo} alt="logo" />
			</div>
			<div className={`row text-center`}>
				<div className={`col-7 text-end p-0 pe-3`}>January 23, 2022</div>
				<div className={`col-5 text-start p-0`}>8:15pm</div>
			</div>
			<div className={`row align-items-center justify-content-center mb-3`}>
				Order Bill #1
			</div>
			<div className={`row align-items-center justify-content-center mb-1`}>
				<div className={`col-6 align-items-center justify-content-center`}>
					{" "}
					<div className={`row ps-2 `}>Client Name:</div>
					<div className={`row ps-2 `}>Ahmed Ali Nour</div>
				</div>
				<div className={`col-6 ${styles.border}`}>
					{" "}
					<div className={`row ps-5 `}>Client Phone:</div>
					<div className={`row ps-5 `}>01012345667</div>
				</div>
			</div>
			<table className="table table-borderless mb-0 mt-3">
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
			<div
				className={`col-12 align-items-center justify-content-center my-3`}
			>
				<Image src={divider} alt="divider" layout="responsive" />
			</div>{" "}
			<div className={`row align-items-center justify-content-center `}>
				<div className={`col-6 text-start ${styles.subtotal}`}>
					Quantity:
				</div>
				<div className={`col-6 text-end pe-4 ${styles.total_quantity}`}>
					3x
				</div>
				<div className={`col-6 text-start ${styles.subtotal}`}>
					Subtotal:
				</div>
				<div className={`col-6 text-end pe-4 ${styles.total_quantity}`}>
					72 EGP
				</div>{" "}
				<div className={`col-6 text-start ${styles.subtotal}`}>taxes:</div>
				<div className={`col-6 text-end pe-4 ${styles.total_quantity}`}>
					12 EGP
				</div>
			</div>{" "}
			<div
				className={`col-12 align-items-center justify-content-center my-3`}
			>
				<Image src={divider} alt="divider" layout="responsive" />
			</div>
			<div className={`row align-items-center justify-content-center mb-4`}>
				{" "}
				<div className={`col-6 text-start`}>Total</div>
				<div className={`col-6 text-end pe-4  ${styles.total_price}`}>
					84 EGP
				</div>
			</div>
		</Card>
	);
};

export default PrintableBill;
