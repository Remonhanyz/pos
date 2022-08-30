import Image from "next/image";
import React from "react";
import Card from "../Card";
import styles from "./index.module.scss";
import Pizza from "../../public/images/pizza.svg";
import hot from "../../public/images/hot.svg";

const ItemCard = ({
	image = Pizza,
	title = "Fettuccine Chicken Alferdo",
	price = 68.34
}) => {
	return (
		<Card
			margin={`0.5rem `}
			className={`${styles.container}`}
			outerClassName={`${styles.alignment} align-items-center justify-content-center`}
		>
			<div className={`m-0 p-0 position-relative`}>
				<div className="d-flex align-items-center justify-content-center mb-3">
					<Image src={image} alt={title} />
				</div>
				<div className={`col-12 ${styles.title}`}>{title}</div>
				<div className={`col-12 pt-3 ${styles.price} ms-2`}>
					{price} EGP
				</div>
				<div className={`col-12 w-100 d-flex justify-content-between`}>
					<div
						className={`btn-group mt-2`}
						role="group"
						aria-label="Basic mixed styles example"
					>
						<button
							type="button"
							className={`btn ${styles.button} me-1 `}
						>
							S
						</button>
						<button
							type="button"
							className={`btn ${styles.button} me-1 `}
						>
							M
						</button>
						<button type="button" className={`btn ${styles.button} `}>
							L
						</button>
					</div>
					<button
						type="button"
						className={`btn ${styles.add} align-self-end `}
					>
						Add
					</button>
				</div>
				<button className={`position-absolute top-0 left-0 ${styles.hot}`}>
					<Image src={hot} alt="hot" />
				</button>
			</div>
		</Card>
	);
};

export default ItemCard;
