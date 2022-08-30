import React, { useState } from "react";
import FoodItem from "../../components/FoodItem";
import FoodType from "../../components/FoodType";
import ItemsList from "../../components/ItemsList";
import OrderBillMain from "../../components/OrderBillMain";
import OrderType from "../../components/OrderType";

const TakeAway = () => {
const [orderType, setOrderType] = useState('Dine Inn')
	return (
		<div className={`row mx-0 px-0 pt-4 pb-0 mb-0 h-100`}>
			<div className={`col-lg-8 col-md-6 col-12 h-100`}>
				<OrderType orderType={orderType} setOrderType={setOrderType} />
				<FoodType orderType={orderType} />
				<ItemsList orderType={orderType} />
			</div>
			<div className={`col-lg-4 col-md-6 col-12 h-100`}>
				<OrderBillMain orderType={orderType} />
			</div>
		</div>
	);
};

export default TakeAway;
