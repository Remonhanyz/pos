import React from 'react'
import Card from '../Card';
import styles from './index.module.scss'
import pizza from '../../public/images/pizza_slice.svg'
import Image from 'next/image';
import Search from '../Search';
const FoodType = ({orderType}) => {
	return (
		<>
			{orderType == "Take Away" ||
				(orderType == "Delivery" && (
					<>
						<div className={`d-flex overflow-auto gap-3 mb-2`}>
							<div className={`${styles.card}`}>
								<Card
									margin={"0.8rem 0rem"}
									style={{height: "7rem", borderRadius: "4px"}}
									className={`p-0`}
								>
									<button
										className={`d-flex flex-column  justify-content-center align-items-center h-100 ${styles.content} ${styles.active}`}
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
									style={{height: "7rem", borderRadius: "4px"}}
									className={`p-0`}
								>
									<button
										className={`d-flex flex-column  justify-content-center align-items-center h-100 ${styles.content}`}
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
									style={{height: "7rem", borderRadius: "4px"}}
									className={`p-0`}
								>
									<button
										className={`d-flex flex-column  justify-content-center align-items-center h-100 ${styles.content}`}
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
									style={{height: "7rem", borderRadius: "4px"}}
									className={`p-0`}
								>
									<button
										className={`d-flex flex-column  justify-content-center align-items-center h-100 ${styles.content}`}
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
									style={{height: "7rem", borderRadius: "4px"}}
									className={`p-0`}
								>
									<button
										className={`d-flex flex-column  justify-content-center align-items-center h-100 ${styles.content}`}
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
									style={{height: "7rem", borderRadius: "4px"}}
									className={`p-0`}
								>
									<button
										className={`d-flex flex-column  justify-content-center align-items-center h-100 ${styles.content}`}
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
									style={{height: "7rem", borderRadius: "4px"}}
									className={`p-0`}
								>
									<button
										className={`d-flex flex-column  justify-content-center align-items-center h-100 ${styles.content}`}
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
									style={{height: "7rem", borderRadius: "4px"}}
									className={`p-0`}
								>
									<button
										className={`d-flex flex-column  justify-content-center align-items-center h-100 ${styles.content}`}
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
									style={{height: "7rem", borderRadius: "4px"}}
									className={`p-0`}
								>
									<button
										className={`d-flex flex-column  justify-content-center align-items-center h-100 ${styles.content}`}
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
									style={{height: "7rem", borderRadius: "4px"}}
									className={`p-0`}
								>
									<button
										className={`d-flex flex-column  justify-content-center align-items-center h-100 ${styles.content}`}
									>
										<Image src={pizza} alt="pizza" />
										<div className={`pt-2 ${styles.cardText}`}>
											Pizza
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
					</>
				))}
		</>
	);
	
};

export default FoodType;