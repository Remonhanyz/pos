import Image from "next/image";
import React from "react";
import Card from "../Card";
import empty from "../../public/images/empty.svg";
import full from "../../public/images/full.svg";
import reserved from "../../public/images/reserved.svg";
import styles from "./index.module.scss";
import {useState} from "react";
import {motion} from "framer-motion";
import {downToUpChangable, rightToLeft} from "../../animation";

const TableSelector = ({orderType, floor, setIsTables}) => {
	const [table, setTable] = useState("1");
	var tables = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		22, 23, 24, 25
	];
	return (
		<>
			<motion.div
				key={orderType + floor}
				variants={downToUpChangable()}
				initial="hidden"
				animate="visible"
			>
				<Card className={`${styles.container} overflow-auto`}>
					<div className="d-flex ">
						<div className="col-4 align-items-center justify-content-center text-center d-flex flex-column">
							<div className={`mb-3 `}>Empty Tables</div>
							<Image src={empty} alt="empty table" />
							<div className={`mt-3 ${styles.total}`}>TOTAL: 24</div>
						</div>
						<div className="col-4 align-items-center justify-content-center text-center d-flex flex-column">
							<div className={`mb-3 `}>Reserved Tables</div>
							<Image src={reserved} alt="empty table" />
							<div className={`mt-3 ${styles.total}`}>TOTAL: 5</div>
						</div>{" "}
						<div className="col-4 align-items-center justify-content-center text-center d-flex flex-column">
							<div className={`mb-3 `}>Occupied Tables</div>
							<Image src={full} alt="Occupied table" />
							<div className={`mt-3 ${styles.total}`}>TOTAL: 12</div>
						</div>
					</div>
					<div className={`${styles.tablesList} mt-4 p-3`}>
						{tables.map((value) => (
							<button
								key={value}
								className={`${styles.number} ${
									table === value && styles.active
								} m-2`}
								onClick={() => {
									setTable(value);
									setIsTables(false);
								}}
							>
								{value}
							</button>
						))}
					</div>
				</Card>
			</motion.div>
		</>
	);
};

export default TableSelector;
