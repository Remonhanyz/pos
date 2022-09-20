import Image from "next/image";
import React from "react";
import styles from "./index.module.scss";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import {BsArrowRight} from 'react-icons/bs'
import Button from "../../components/Button";
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

const Login = ({setIsLogedin}) => {
	return (
		<>
			<div
				className={`container px-0 min-vw-100 min-vh-100 ${styles.bg_hero_banner}`}
			>
				<div className={`container px-0`}>
					<div className={`row w-100 min-vh-100`}>
						<div
							className={`col-xl-6 col-lg-5 d-flex justify-content-center align-items-center align-items-lg-start flex-column ps-5`}
						>
							<h1 className={`${styles.logo} mb-4 text-lg-start`}>
								LOGO
							</h1>
							<div
								className={`${styles.description} text-center text-lg-start mb-4`}
							>
								welcome to you
								<br className="d-none d-lg-block" />
								enter your phone & password
							</div>
							<Formik
								initialValues={{
									phone: "",
									password: ""
								}}
								validationSchema={schema}
								onSubmit={(values) => {
									console.log(values);
								}}
							>
								{({touched, errors, handleSubmit}) => (
									<Form className={`row g-3 mt-2`}>
										<div className={`col-md-12 ${styles.inputText}`}>
											<label
												htmlFor="inputPhone"
												className="form-label"
											>
												Phone
											</label>
											<Field
												type="text"
												name="phone"
												className={`${
													styles.inputField
												} form-control ${
													touched.phone && errors.phone
														? "is-invalid"
														: ""
												}`}
												id="inputPhone"
											/>
											<ErrorMessage
												component="div"
												name="phone"
												className="invalid-feedback"
											/>
										</div>
										<div className={`col-md-12 ${styles.inputText}`}>
											<label
												htmlFor="inputPassword"
												className="form-label"
											>
												Password
											</label>
											<Field
												type="password"
												name="password"
												className={`${
													styles.inputField
												} form-control ${
													touched.password && errors.password
														? "is-invalid"
														: ""
												}`}
												id="inputPassword"
											/>
											<ErrorMessage
												component="div"
												name="password"
												className="invalid-feedback"
											/>{" "}
										</div>

										<div className="col-12 d-flex justify-content-end alignitems-center">
											<Button
												className={`${styles.button} mb-5 mb-2xl-0 px-4`}
												onClick={()=>setIsLogedin(true)}
											>
												<BsArrowRight size={26} />
											</Button>
										</div>
									</Form>
								)}
							</Formik>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
