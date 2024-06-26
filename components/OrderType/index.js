import React, {useState} from "react";
import Card from "../Card";
import styles from "./index.module.scss";
import dineIn from "../../public/images/dinne_in.svg";
import takeaway from "../../public/images/take_away.svg";
import delivery from "../../public/images/delivery.svg";
import reserv from "../../public/images/reservation.svg";
import OrderTypeItem from "../OrderTypeItem";
import { motion } from "framer-motion";
import { rightToLeft } from "../../animation";
const OrderType = ({setOrderType, orderType}) => {

	return (
		<motion.div variants={rightToLeft(.5)} initial='hidden' animate='visible'>
			<Card className={` m-0 ps-4 pe-4 p-0`}>
				<div className={`${styles.title} d-flex me-auto ms-2`}>Orders</div>
				<div className={`py-3 d-flex overflow-auto`}>
					<OrderTypeItem
						text="Dine Inn"
						icon={dineIn}
						active={orderType == "Dine Inn" && true}
						setSelectedElement={setOrderType}
					/>
					<OrderTypeItem
						text="Take Away"
						icon={takeaway}
						active={orderType == "Take Away" && true}
						setSelectedElement={setOrderType}
					/>
					<OrderTypeItem
						text="Delivery"
						icon={delivery}
						setSelectedElement={setOrderType}
						active={orderType == "Delivery" && true}
					/>
					<OrderTypeItem
						text="Reservation"
						icon={reserv}
						setSelectedElement={setOrderType}
						active={orderType == "Reservation" && true}
					/>
				</div>
			</Card>
		</motion.div>
	);
};

export default OrderType;
