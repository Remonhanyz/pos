import {ErrorMessage, Field, Form, Formik} from "formik";
import React, { useEffect } from "react";
import BillOrderCard from "../BillOrderCard";
import styles from "./index.module.scss";
import * as yup from "yup";
import Image from "next/image";
import divider from "../../public/images/divider.svg";
import BillOptions from "../BillOptions";
import { getCurrentBill } from '../../redux-state/reducer/takeAwayBillsReducer'
import { useDispatch, useSelector } from "react-redux";

const TakeAwayBill = () => {
	let schema = yup.object().shape({
		name: yup
			.string()
			.required("Required")
			.min(2, "Too Short!")
			.max(60, "Too Long!"),
		phone: yup
			.string()
			.required("Required")
			.min(11, "Too Short!")
			.max(11, "Too Long!")
	});
	const dispatch= useDispatch()

	let currentBill = dispatch(getCurrentBill());
	console.log("hi: ",currentBill);
 const data =useSelector((state) => console.log('state' , state))
	useEffect(() => {
	  currentBill = getCurrentBill().payload
		console.log('effect: ',currentBill);
	})
	
	return (
		<div className={`${styles.BillContainer} h-100 d-flex flex-column `}>
			<div className="row ">
				<div className={`col-8 ${styles.orderNumber}`}>Order Bill # 1</div>
				<div className={`col-4 ${styles.orderType} text-end`}>
					{" "}
					Take Away
				</div>
			</div>
			<div className={`${styles.orderDate} `}>{currentBill.date}</div>
			<div className={`pt-1 d-flex flex-column overflow-auto pe-1`}>
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
				<div
					className={`accordion`}
					valign="bottom"
					id="accordionPanelsStayOpenExample"
				>
					<div className="accordion-item mt-2">
						<h2
							className="accordion-header"
							id="panelsStayOpen-headingOne"
						>
							<button
								className="accordion-button"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#panelsStayOpen-collapseOne"
								aria-expanded="true"
								aria-controls="panelsStayOpen-collapseOne"
							>
								Client information
							</button>
						</h2>
						<div
							id="panelsStayOpen-collapseOne"
							className="accordion-collapse collapse show "
							aria-labelledby="panelsStayOpen-headingOne"
						>
							<div className="accordion-body p-0 pt-2">
								<Formik
									initialValues={{
										name: "",
										phone: ""
									}}
									validationSchema={schema}
									onSubmit={(values) => {
										console.log(values);
									}}
								>
									{({touched, errors, handleSubmit}) => (
										<Form className={`row g-3`}>
											<div
												className={`col-md-12 ${styles.inputText}`}
											>
												<label
													htmlFor="inputname"
													className="form-label mb-0"
												>
													client name
												</label>
												<Field
													type="text"
													name="name"
													className={`${
														styles.inputField
													} form-control ${
														touched.name && errors.name
															? "is-invalid"
															: ""
													}`}
													id="inputname"
												/>
												<ErrorMessage
													component="div"
													name="name"
													className="invalid-feedback"
												/>
											</div>
											<div
												className={`col-md-12 ${styles.inputText} mt-2`}
											>
												<label
													htmlFor="inputphone"
													className="form-label mb-0"
												>
													client phone
												</label>
												<Field
													type="phone"
													name="phone"
													className={`${
														styles.inputField
													}  form-control ${
														touched.phone && errors.phone
															? "is-invalid"
															: ""
													}`}
													id="inputphone"
												/>
												<ErrorMessage
													component="div"
													name="phone"
													className="invalid-feedback"
												/>{" "}
											</div>
										</Form>
									)}
								</Formik>
							</div>
						</div>
					</div>
				</div>
				<div className="py-2">
					<Image src={divider} layout="responsive" alt="divider" />
				</div>
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
					<div className="pt-1 mb-1 col-12">
						<BillOptions />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TakeAwayBill;
