import React, {useEffect} from "react";
import Card from "../Card";
import ItemCard from "../ItemCard";
import styles from "./index.module.scss";
import {motion} from "framer-motion";
import { downToUpChangable } from "../../animation";

const ItemsList = ({orderType, foodType}) => {
	const variants = {
		hidden: {opacity: 0, y: 200},
		enter: {opacity: 1, y: 0},
		exit: {opacity: 0, y: 0}
	};

	return (
		<>
			<motion.div
				key={foodType + orderType}
				variants={downToUpChangable()}
				initial="hidden"
				animate="visible"
				exit="exit"
				className={`row ${styles.container}`}
			>
				<div className="col-xxl-3 col-xl-4 col-lg-6 col-12 m-0 p-0">
					<ItemCard />
				</div>
				<div className="col-xxl-3 col-xl-4 col-lg-6 col-12 m-0 p-0">
					<ItemCard />
				</div>
				<div className="col-xxl-3 col-xl-4 col-lg-6 col-12 m-0 p-0">
					<ItemCard />
				</div>
				<div className="col-xxl-3 col-xl-4 col-lg-6 col-12 m-0 p-0">
					<ItemCard />
				</div>
				<div className="col-xxl-3 col-xl-4 col-lg-6 col-12 m-0 p-0">
					<ItemCard />
				</div>
				<div className="col-xxl-3 col-xl-4 col-lg-6 col-12 m-0 p-0">
					<ItemCard />
				</div>
				<div className="col-xxl-3 col-xl-4 col-lg-6 col-12 m-0 p-0">
					<ItemCard />
				</div>
				<div className="col-xxl-3 col-xl-4 col-lg-6 col-12 m-0 p-0">
					<ItemCard />
				</div>
				<div className="col-xxl-3 col-xl-4 col-lg-6 col-12 m-0 p-0">
					<ItemCard />
				</div>
				<div className="col-xxl-3 col-xl-4 col-lg-6 col-12 m-0 p-0">
					<ItemCard />
				</div>
				<div className="col-xxl-3 col-xl-4 col-lg-6 col-12 m-0 p-0">
					<ItemCard />
				</div>
				<div className="col-xxl-3 col-xl-4 col-lg-6 col-12 m-0 p-0">
					<ItemCard />
				</div>
				<div className="col-xxl-3 col-xl-4 col-lg-6 col-12 m-0 p-0">
					<ItemCard />
				</div>
			</motion.div>
		</>
	);
};

export default ItemsList;
