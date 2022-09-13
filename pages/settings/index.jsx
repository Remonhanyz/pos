import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import hello from "../../public/images/hello.svg";
import Image from "next/image";
import Link from "next/link";
import classes from "./index.module.scss";
import { motion } from "framer-motion";
import { downToUp } from "../../animation";
const Profile = () => {
  let schema = yup.object().shape({
    name: yup
      .string()
      .required("Required")
      .min(2, "Too Short!")
      .max(11, "Too Long!"),
    phone: yup
      .string()
      .required("Required")
      .min(11, "Too Short!")
      .max(11, "Too Long!"),
  });
  return (
    <motion.section className={`container h-100 ${classes.noScroll}`}>
      <motion.div
        variants={downToUp}
        animate="visible"
        initial="hidden"
        className="row h-100"
      >
        <motion.div className="col-lg-12 d-flex flex-column justify-content-center align-items-center">
          <Formik
            initialValues={{
              name: "",
              phone: "",
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
                <div className="col-lg-12 d-flex justify-content-center">
                  <h5 style={{ marginRight: ".5rem" }}>Hello Mr . Mohamed </h5>{" "}
                  <Image src={hello} alt="hello" />
                </div>
                <div className="col-lg-12">
                  <p className="text-center" style={{ marginTop: "-.7rem" }}>
                    this is your personal information you <br /> can change your
                    password only
                  </p>
                </div>
                <div className={`col-md-12 `}>
                  <label htmlFor="inputname" className="form-label">
                    name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className={` form-control ${classes.inputField} ${
                      touched.name && errors.name ? "is-invalid" : ""
                    }`}
                    id="inputname"
                  />
                  <ErrorMessage
                    component="div"
                    name="name"
                    className="invalid-feedback"
                  />
                </div>
                <div className={`col-md-12 `}>
                  <label htmlFor="inputphone" className="form-label">
                    phone
                  </label>
                  <Field
                    type="phone"
                    name="phone"
                    className={` form-control ${classes.inputField} ${
                      touched.phone && errors.phone ? "is-invalid" : ""
                    }`}
                    id="inputphone"
                  />
                  <ErrorMessage
                    component="div"
                    name="phone"
                    className="invalid-feedback"
                  />{" "}
                </div>

                <div className="col-12 d-flex justify-content-end alignitems-center">
                  {/* <button
                    type="submit"
                    className={` mb-5 mb-2xl-0 btn btn-primary`}
                  >
                    Submit
                  </button> */}
                  <Link
                    href={"./settings/change-password"}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Change Password ?
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Profile;
