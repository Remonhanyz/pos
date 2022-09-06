import React from "react";
import Card from "../Card";
import {motion} from "framer-motion";
import {rightToLeft} from "../../animation";
import styles from "./index.module.scss";
import { useState } from "react";

const Floors = ({ orderType }) => {
    const [ floor, setFloor ] = useState("First Floor");
    
	return (
		<>
			{orderType == "Dine Inn" && (
				<motion.div
					key={orderType}
					variants={rightToLeft(0, 0.3, "linear")}
					initial="hidden"
					animate="visible"
				>
					<Card margin={"0.8rem 0"} className="p-0 m-0">
						<div className="row ms-5 ps-4 p-0 m-0 position-relative">
							<button
								className={`col-auto px-4 py-3 ${styles.button} ${
									floor == "First Floor" && styles.active
								}`}
								onClick={() => setFloor("First Floor")}
							>
								First Floor
							</button>
							<button
								className={`col-auto px-4 py-2 ${styles.button} ${
									floor == "Second Floor" && styles.active
								}`}
								onClick={() => setFloor("Second Floor")}
							>
								Second Floor
							</button>
							<button
								className={`col-auto px-4 py-2 ${styles.button} ${
									floor == "Outdoor Terrace" && styles.active
								}`}
								onClick={() => setFloor("Outdoor Terrace")}
							>
								Outdoor Terrace
							</button>
						</div>
					</Card>
				</motion.div>
			)}
		</>
	);
};

export default Floors;
