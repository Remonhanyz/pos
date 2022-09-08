import Image from "next/image";
import React, {useState} from "react";
import styles from "./index.module.scss";
import divider from "../../public/images/divider.svg";
import BillOrderCard from "../BillOrderCard";
import {useDrop} from "react-dnd";
import Button from "../Button";
import {BsArrowRight} from "react-icons/bs";
import {MdDelete} from "react-icons/md";
import {motion} from "framer-motion";
import {pageInMove, pageOutMove} from "../../animation";
import DeliveryBillForm from "../DeliveryBillForm";

const DeliveryBill = () => {
	const [{isOver}, drop] = useDrop(() => ({
		accept: "div",
		collect: (monitor) => ({
			isOver: monitor.isOver()
		}),
		drop: (item) => {
			console.log(item);
		}
	}));
	const [form, setForm] = useState(false);

	return (
		<>
			<motion.div
				className={`${styles.BillContainer} h-100 d-flex flex-column `}
				variants={pageOutMove()}
				animate={`${!form ? "visible" : "exit"}`}
				exit="exit"
			>
				<div className="row ">
					<div className={`col-8 ${styles.orderNumber}`}>
						Order Bill # 1
					</div>
					<div className={`col-4 ${styles.orderType} text-end`}>
						Delivery
					</div>
				</div>
				<div className={`${styles.orderDate} `}>
					January 23, 2022 - 5:00 pm
				</div>
				<div
					ref={drop}
					className={`pt-1 d-flex flex-column overflow-auto pe-1 h-100`}
				>
					<BillOrderCard
						title="Fettuccine Chicken Alferdo"
						price="68.34"
						size={"M"}
						quantity="1"
					/>
					<BillOrderCard
						title="Spicy - Fettuccine Chicken"
						price="68.34"
						size={"S"}
						quantity="1"
					/>
					<BillOrderCard
						title="Fettuccine Chicken Alferdo"
						price="68.34"
						size={"M"}
						quantity="1"
					/>
				</div>
				<div className={`mt-auto ${styles.optionsContainer}`}>
					<div className="pt-1 row">
						<div className={`col-8 ${styles.subPriceText}`}>Subtotal</div>
						<div className={`col-4 ${styles.subPriceNumber} text-end`}>
							72 EGP
						</div>
						<div className={`col-8 ${styles.subPriceText}`}>taxes</div>
						<div className={`col-4 ${styles.subPriceNumber} text-end`}>
							12 EGP
						</div>
						<div className="py-2">
							<Image src={divider} alt="divider" layout="responsive" />
						</div>
						<div className={`col-8 ${styles.totalText}`}>Total</div>
						<div className={`col-4 ${styles.totalNumber} text-end`}>
							84 EGP
						</div>
						<div
							className={`py-3 mb-1 col-12 row ${styles.optionsContainer} px-0 ps-2`}
						>
							<Button className={`ms-3 col-2 ${styles.delete} me-2`}>
								<MdDelete size={26} />
							</Button>
							<Button className={`col-sm`} onClick={() => setForm(true)}>
								next <BsArrowRight size={26} />
							</Button>
						</div>
					</div>
				</div>
			</motion.div>
			<motion.div
				variants={pageInMove()}
				initial="hidden"
				animate={`${form ? "visible" : "hidden"}`}
				exit="exit"
				className={`position-absolute top-0 left-0 h-100`}
			>
				<DeliveryBillForm setForm={setForm}/>
			</motion.div>
		</>
	);
};

export default DeliveryBill;
