import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import hello from "../../../public/images/lock.svg";
import Image from "next/image";
import Link from "next/link";
import classes from "./index.module.scss";
import ReactInputVerificationCode from "react-input-verification-code";
import { motion } from "framer-motion";
import { downToUp } from "../../../animation";
import Button from "../../../components/Button";
import { useRouter } from "next/router";
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
  const router = useRouter()

  return (
    <motion.section className={`container h-100 ${classes.noScroll}`}>
      <motion.div
        variants={downToUp}
        initial="hidden"
        animate="visible"
        className="row h-100"
      >
        <div className="col-lg-12 d-flex flex-column justify-content-center align-items-center">
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
                  width: "30%",
                  padding: "2rem",
                  borderRadius: "10px",
                }}
              >
                <div className="col-lg-12 d-flex align-items-baseline">
                  <h5 style={{ marginRight: ".5rem" }} className='me-5'>Hello Mr . Mohamed </h5>{" "}
                  <Image src={hello} alt="hello"  />
                </div>
                <div className="col-lg-12">
                  <p className="" style={{ marginTop: "-.7rem" }}>
                    Enter code we have sent to your phone <br /> number
                  </p>
                </div>
                <div className={`${classes.custom_styles}`}>

                <ReactInputVerificationCode
                  length={5}
                  placeholder={""}
                  onCompleted={(e) => {
                    console.log(e);
                  }}
                />

                </div>
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <Button
                    type="submit"
                    className={` w-100 mb-5 py-3 mb-2xl-0 m-0`}
                    onClick={()=>router.push('./new-password')}
                  >
                    Confirm
                  </Button>

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
    </motion.section>
  );
};

export default Profile;
