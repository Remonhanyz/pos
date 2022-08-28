import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import BillOrderCard from "../BillOrderCard";
import styles from "./index.module.scss";
import * as yup from "yup";
import Image from "next/image";
import divider from '../../public/images/divider.svg'
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
	return (
		<>
			<div className="row">
				<div className={`col-8 p-0 ${styles.orderNumber}`}>
					Order Bill # 1
				</div>
				<div className={`col-4 p-0 ${styles.orderType} text-end`}>
					{" "}
					Take Away
				</div>
			</div>
			<div className={`row ${styles.orderDate}`}>
				January 23, 2022 - 5:00 pm
			</div>
			<div className={`${styles.BillsContainer} container p-0 my-2`}>
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

			<div
				className={`accordion `}
				valign="bottom"
				id="accordionPanelsStayOpenExample"
			>
				<div className="accordion-item">
					<h2 className="accordion-header" id="panelsStayOpen-headingOne">
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
										<div className={`col-md-12 ${styles.inputText}`}>
											<label
												htmlFor="inputname"
												className="form-label"
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
												className="form-label"
											>
												client phone
											</label>
											<Field
												type="phone"
												name="phone"
												className={`${
													styles.inputField
												} form-control ${
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
			<Image src={divider} alt="divider" />
			<div></div>
			<Image src={divider} alt="divider" />
		</>
	);
};

export default TakeAwayBill;
