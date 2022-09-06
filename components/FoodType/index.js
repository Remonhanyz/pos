import React from 'react'
import Card from '../Card';
import styles from './index.module.scss'
import pizza from '../../public/images/pizza_slice.svg'
import Image from 'next/image';
import Search from '../Search';
import { motion } from "framer-motion";
import { rightToLeft } from '../../animation';
// import {rightToLeft} from "../../animation";

const FoodType = ({orderType, setfoodType, foodType}) => {
	const variants = {
		hidden: {opacity: 0, x: 200},
		enter: {opacity: 1, x: 0},
		exit: {opacity: 0, x: 0}
	};
	const handleClick = (text) => {
		setfoodType(text);
	};
	return (
		<>
			{(orderType == "Take Away" || orderType == "Delivery") && (
				<motion.div
					key={orderType}
					variants={rightToLeft(0, 0.6, 'linear')}
					initial="hidden" // Set the initial state to variants.hidden
					animate="visible" // Animated state to variants.enter
				>
					<div className={`d-flex overflow-auto gap-3 mb-2`}>
						<div className={`${styles.card}`}>
							<Card
								margin={"0.8rem 0rem"}
								style={{height: "7rem", borderRadius: "8px"}}
								className={`p-0`}
							>
								<button
									onClick={() => handleClick("Pizza")}
									className={`d-flex flex-column  justify-content-center align-items-center h-100 ${
										styles.content
									} ${foodType == "Pizza" && styles.active}`}
								>
									<Image src={pizza} alt="pizza" />
									<div className={`pt-2 ${styles.cardText}`}>
										Pizza
									</div>
								</button>
							</Card>
						</div>
						<div className={`${styles.card}`}>
							<Card
								margin={"0.8rem 0rem"}
								style={{height: "7rem", borderRadius: "8px"}}
								className={`p-0`}
							>
								<button
									onClick={() => handleClick("Burger")}
									className={`d-flex flex-column  justify-content-center align-items-center h-100 ${
										foodType == "Burger" && styles.active
									} ${styles.content}`}
								>
									<Image src={pizza} alt="pizza" />
									<div className={`pt-2 ${styles.cardText}`}>
										Burger
									</div>
								</button>
							</Card>
						</div>
						<div className={`${styles.card}`}>
							<Card
								margin={"0.8rem 0rem"}
								style={{height: "7rem", borderRadius: "8px"}}
								className={`p-0`}
							>
								<button
									onClick={() => handleClick("Hot dog")}
									className={`d-flex flex-column  justify-content-center align-items-center h-100 ${
										foodType == "Hot dog" && styles.active
									} ${styles.content}`}
								>
									<Image src={pizza} alt="pizza" />
									<div className={`pt-2 ${styles.cardText}`}>
										Hot dog
									</div>
								</button>
							</Card>
						</div>
					</div>
					<div className="row align-items-center mb-2">
						<div className={`col-6`}>Menu Of Pizza</div>
						<div className={`col-6`}>
							<Search />
						</div>
					</div>
				</motion.div>
			)}
		</>
	);
};

export default FoodType;