import React, {useState} from "react";
import FoodItem from "../../components/FoodItem";
import FoodType from "../../components/FoodType";
import ItemsList from "../../components/ItemsList";
import OrderBillMain from "../../components/OrderBillMain";
import OrderType from "../../components/OrderType";
import {useSelector} from "react-redux";
import styles from "./index.module.scss";
import {motion} from "framer-motion";
const TakeAway = () => {
	const [orderType, setOrderType] = useState("Dine Inn");
	const [foodType, setfoodType] = useState("Pizza");
	const printState = useSelector((state) => state.printState.data);
	const variants = {
		hidden: {opacity: 0, y: 200},
		enter: {opacity: 1, y: 0},
		exit: {opacity: 0, y: 0}
	};
	return (
		<>
			<motion.div
				className={`row mx-0 px-0 pt-4 pb-0 mb-0 h-100 ${
					printState == true && styles.translat
				}`}
			>
				<div className={`col-xxl-9 col-lg-8 col-md-6 col-12 h-100`}>
					<OrderType orderType={orderType} setOrderType={setOrderType} />
					<FoodType
						orderType={orderType}
						foodType={foodType}
						setfoodType={setfoodType}
					/>
					<ItemsList orderType={orderType} foodType={foodType} />
				</div>
				<div className={`col-xxl-3 col-lg-4 col-md-6 col-12 h-100`}>
					<OrderBillMain orderType={orderType} />
				</div>
			</motion.div>
			{/* <div
				className={`row position-absolute top-0 ${
					printState == true
						? styles.showPrint
						: styles.hidePrint + " d-none "
				}`}
			>
				<div className={`col-xxl-9 col-lg-8 col-md-6 col-12 h-100`}>
					<OrderType orderType={orderType} setOrderType={setOrderType} />
					<FoodType orderType={orderType} />
					<ItemsList orderType={orderType} />
				</div>
				<div className={`col-xxl-3 col-lg-4 col-md-6 col-12 h-100`}>
					<OrderBillMain orderType={orderType} />
				</div>
			</div> */}
		</>
	);
};

export default TakeAway;
