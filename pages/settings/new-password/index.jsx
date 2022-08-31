import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import lock from "../../../public/images/lock.svg";
import Image from "next/image";
import Link from "next/link";
import classes from "./index.module.scss";
import { motion } from "framer-motion";
import { downToUp } from "../../../amimation";
const Profile = () => {
  let schema = yup.object().shape({
    password: yup
      .string()
      .required("Required")
      .min(6, "Too Short!")
      .max(11, "Too Long!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "passwords doesn't match")
      .required("Required"),
  });
  return (
    <section style={{ overflowY: "hidden" }} className="container h-100">
      <motion.div
        variants={downToUp}
        initial="hidden"
        animate="visible"
        className="row h-100"
      >
        <div className="col-lg-12 d-flex flex-column justify-content-center align-items-center">
          <Formik
            initialValues={{
              password: "",
              confirmPassword: "",
            }}
            validationSchema={schema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ touched, errors, handleSubmit }) => (
              <Form
                className={`row g-3 mt-2`}
                style={{
                  backgroundColor: "white",
                  width: "33%",
                  padding: "2rem",
                  borderRadius: "10px",
                }}
              >
                <div className="col-lg-12 d-flex align-items-baseline">
                  <h5 style={{ marginRight: ".5rem" }}>New Password </h5>{" "}
                  <Image src={lock} alt="hello" />
                </div>
                <div className="col-lg-12">
                  <p className="" style={{ marginTop: "-.7rem" }}>
                    enter new password , make it different <br /> from previous
                    one
                  </p>
                </div>
                <div className={`col-md-12 `}>
                  <label htmlFor="inputpassword" className="form-label">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    className={` form-control ${classes.inputField} ${
                      touched.password && errors.password ? "is-invalid" : ""
                    }`}
                    id="inputpassword"
                  />
                  <ErrorMessage
                    component="div"
                    name="password"
                    className="invalid-feedback"
                  />
                </div>
                <div className={`col-md-12 `}>
                  <label htmlFor="inputconfirmPassword" className="form-label">
                    Confirm password
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    className={` form-control ${classes.inputField} ${
                      touched.confirmPassword && errors.confirmPassword
                        ? "is-invalid"
                        : ""
                    }`}
                    id="inputconfirmPassword"
                  />
                  <ErrorMessage
                    component="div"
                    name="confirmPassword"
                    className="invalid-feedback"
                  />{" "}
                </div>

                <div className="col-12 d-flex justify-content-end alignitems-center">
                  <button
                    type="submit"
                    className={` mb-5 mb-2xl-0 btn btn-primary`}
                  >
                    Submit
                  </button>
                  {/* <Link
                    href={""}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Change Password ?
                  </Link> */}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </motion.div>
    </section>
  );
};

export default Profile;
