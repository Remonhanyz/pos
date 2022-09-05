import Image from "next/image";
import React from "react";
import BillOptions from "../BillOptions";
import Button from "../Button";
import styles from "./index.module.scss";
import divider from "../../public/images/divider.svg";
import {BsArrowLeft} from "react-icons/bs";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";

let schema = yup.object().shape({
	phone: yup
		.string()
		.required("Required")
		.min(11, "Too Short!")
		.max(11, "Too Long!"),
	password: yup
		.string()
		.required("Required")
		.min(8, "Too Short!")
		.max(60, "Too Long!")
});
const DeliveryBillForm = ({setForm}) => {
	return (
		<div className="h-100 d-flex flex-column">
			<div className="row">
				<div className={`col-8 ${styles.orderNumber}`}>Order Bill # 1</div>
				<div className={`col-4 ${styles.orderType} text-end`}>Delivery</div>
			</div>
			<div className={`${styles.orderDate} `}>
				January 23, 2022 - 5:00 pm
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
								Delivery man
							</button>
						</h2>
						<div
							id="panelsStayOpen-collapseOne"
							className="accordion-collapse collapse show"
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
													Delivery man name
												</label>
												<div className="dropdown">
													<a
														className={`btn btn-secondary dropdown-toggle  ${styles.dropdown_menu}`}
														href="#"
														role="button"
														data-bs-toggle="dropdown"
														aria-expanded="false"
													>
														Dropdown link
													</a>

													<ul className={`dropdown-menu w-100`}>
														<li>
															<a
																className={`dropdown-item ${styles.dropdown_item}`}
																href="#"
															>
																Action
															</a>
														</li>
														<li>
															<a
																className={`dropdown-item ${styles.dropdown_item}`}
																href="#"
															>
																Another action
															</a>
														</li>
														<li>
															<a
																className={`dropdown-item ${styles.dropdown_item}`}
																href="#"
															>
																Something else here
															</a>
														</li>
													</ul>
												</div>{" "}
											</div>
										</Form>
									)}
								</Formik>
							</div>
						</div>
					</div>
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
					<div
						className={`py-3 mb-1 col-12 row ${styles.optionsContainer} px-0 ps-2`}
					>
						<Button
							className={`col-sm ms-3 d-flex justify-content-center`}
							onClick={() => setForm(false)}
						>
							<BsArrowLeft size={26} /> &nbsp; back
						</Button>

						<BillOptions />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeliveryBillForm;
