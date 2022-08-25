import React from "react";
import Card from "../Card";
import styles from "./index.module.scss";
import {BsPlusLg} from "react-icons/bs";
import {Tabs, Tab} from "react-bootstrap";
const OrderBill = () => {
	return (
		<Card
			outerClassName={`h-100 pb-3 ${styles.card}`}
			style={{height: "100%"}}
		>
			<div className="pt-2 d-flex justify-content-center container">
				<button
					role={"button"}
					className={`${styles.addButton} d-flex align-items-center justify-content-center`}
				>
					<BsPlusLg fontSize={28} color={"#707070"} />
				</button>
				{/* <ul className={`nav nav-tab d-flex`}> */}
				{/* <a
						data-toggle="tab"
						href="#home"
						className={`${styles.tabs} ${styles.active} ms-3  d-flex align-items-center justify-content-center`}
            >
						1
					</a> */}
				{/* <a
						data-toggle="tab"
						href="#menu1"
						className={`${styles.tabs} ms-3 d-flex align-items-center justify-content-center`}
            >
						2
            </a>
            <button
						role={"button"}
						className={`${styles.tabs} ms-3 d-flex align-items-center justify-content-center`}
            >
						3
					</button> */}
				{/* </ul> */}
			</div>
			<Tabs
				defaultActiveKey="1"
				id="uncontrolled-tab-example"
				className="mb-3"
			>
				<Tab
					eventKey="1"
					title="1"
					tabAttrs={{
						className: `${styles.tabs} ${styles.active} ms-3  d-flex align-items-center justify-content-center`
					}}
				>
					dfsfdfsffsfsdfsfsfsdfsdfsdfsd
				</Tab>
				<Tab
					eventKey="2"
					title="2"
					tabAttrs={{
						className: `${styles.tabs} ms-3  d-flex align-items-center justify-content-center`
					}}
				>
					qawebqfdssdgfgfhg
				</Tab>
				<Tab
					eventKey="3"
          title="3"
          
					tabAttrs={{
						className: `${styles.tabs} ms-3  d-flex align-items-center justify-content-center`
					}}
				>
					;iihjklkljhlh,nm,mn,m,
				</Tab>
			</Tabs>
		</Card>
	);
};

export default OrderBill;
