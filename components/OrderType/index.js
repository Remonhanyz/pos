import React, {useState} from "react";
import Card from "../Card";
import styles from "./index.module.scss";
import dineIn from "../../public/images/dinne_in.svg";
import takeaway from "../../public/images/take_away.svg";
import delivery from "../../public/images/delivery.svg";
import reserv from "../../public/images/reservation.svg";
import OrderTypeItem from "../OrderTypeItem";
import Image from "next/image";

const OrderType = () => {
	const active = true
	const icon = dineIn;
	const text = 'hi';
	const [ selectedElement, setSelectedElement ] = useState(dineIn);
	
	const handlePress = (element) => {
		setSelectedElement(element);
		console.log(element)
	};
	return (
		<Card className={` m-0 ps-4 p-0`}>
			<div className={`${styles.title} d-flex me-auto ms-2`}>Orders</div>
			<div className={`py-3 d-flex overflow-auto`}>
				<OrderTypeItem
					text="Dine Inn"
					icon={dineIn}
					active={selectedElement == dineIn && true}
					setSelectedElement={setSelectedElement}
				/>
				<OrderTypeItem
					text="Take Away"
					icon={takeaway}
					active={selectedElement == takeaway && true}
					setSelectedElement={setSelectedElement}
				/>
				<OrderTypeItem
					text="Delivery"
					icon={delivery}
					setSelectedElement={setSelectedElement}
					active={selectedElement == delivery && true}
				/>
				<OrderTypeItem
					text="Reservation"
					icon={reserv}
					setSelectedElement={setSelectedElement}
					active={selectedElement == reserv && true}
				/>
			</div>
		</Card>
	);
};

export default OrderType;
