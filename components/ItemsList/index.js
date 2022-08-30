import React from "react";
import Card from "../Card";
import ItemCard from "../ItemCard";
import styles from "./index.module.scss";
const ItemsList = ({orderType}) => {
	return (
		<>
			{(orderType == "Take Away" ||
				orderType == "Delivery") && (
					<div
						className={`row row-cols-auto d-flex flex-wrap ${styles.container} justify-content-stretch`}
					>
						<ItemCard />
						<ItemCard />
						<ItemCard />
						<ItemCard />
						<ItemCard />
						<ItemCard />
						<ItemCard />
						<ItemCard />
						<ItemCard />
						<ItemCard />
						<ItemCard />
						<ItemCard />
						<ItemCard />
						<ItemCard />
						<ItemCard />
						<ItemCard />
						<ItemCard />
						<ItemCard />
					</div>
				)}
		</>
	);
};

export default ItemsList;
