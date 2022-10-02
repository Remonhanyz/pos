import { LocalizationProvider } from "@mui/lab";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Form, Formik, useFormik } from "formik";
import { DatePicker, DateTimePicker, TimePicker } from "formik-mui-lab";
import { motion } from "framer-motion";
import { useState } from "react";
import * as React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { IoCalendar } from "react-icons/io5";
import * as yup from "yup";

import { downToUpChangable } from "../../animation";
import Button from "../Button";
import ClientDetailsCard from "../ClientDetailsCard";
import Modal from "../Modal";
import styles from "./index.module.scss";

const ReservationList = ({ orderType }) => {
  const [reservationModal, setReservationModal] = useState(false);
  const [dateModal, setDateModal] = useState(false);
  const [value, setValue] = React.useState(null);
  const validationSchema = yup.object({
    date: yup.string("Enter date").required("date is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      date: new Date("2015-03-25"),
      timeFrom: new Date(),
      timeTo: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      {" "}
      <motion.div
        key={orderType}
        variants={downToUpChangable()}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="row align-items-center my-3"
      >
        <div className={`col-6 ${styles.title} ps-3`}>
          Today&apos;s Reservation
        </div>
        <div className={`col-6 d-flex justify-content-end`}>
          <button
            className={`${styles.button} mx-2`}
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#calendarModal"
          >
            <IoCalendar size={20} />
          </button>
          <Button
            className={`px-3`}
            data-bs-toggle="modal"
            data-bs-target="#reservationModal"
          >
            {" "}
            New Reservation
          </Button>
        </div>
      </motion.div>
      <motion.div
        key={orderType}
        variants={downToUpChangable()}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`row ${styles.container} p-2`}
      >
        <div className="col-xxl-3 col-xl-4 col-lg-6 col-12 mb-3 m-0 p-0 ps-2">
          <ClientDetailsCard />
        </div>
        <div className="col-xxl-3 col-xl-4 col-lg-6 col-12 mb-3 m-0 p-0 ps-2">
          <ClientDetailsCard />
        </div>{" "}
        <div className="col-xxl-3 col-xl-4 col-lg-6 col-12 mb-3 m-0 p-0 ps-2">
          <ClientDetailsCard />
        </div>
        <div className="col-xxl-3 col-xl-4 col-lg-6 col-12 mb-3 m-0 p-0 ps-2">
          <ClientDetailsCard />
        </div>
        <div className="col-xxl-3 col-xl-4 col-lg-6 col-12 mb-3 m-0 p-0 ps-2">
          <ClientDetailsCard />
        </div>
        <div className="col-xxl-3 col-xl-4 col-lg-6 col-12 mb-3 m-0 p-0 ps-2">
          <ClientDetailsCard />
        </div>
      </motion.div>
      <Modal name={`calendarModal`}>
        <div className="modal-body d-flex align-items-center justify-content-center w-100 m-0 px-0">
          <Calendar
            className={`w-100 m-0 p-0`}
            tileClassName={`${styles.tile}`}
          />
        </div>
        <Button
          className={`mb-2 w-100`}
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          Confirm
        </Button>
      </Modal>
      <Modal name={`reservationModal`}>
        <div className="modal-body w-100 m-0 p-0 row">
          kjkj
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
            <form className="w-100 m-4 px-4" onSubmit={formik.handleSubmit}>
              jkjkjkjkjkjkl
                {/* <DatePicker
                  label="date"
                  renderInput={(params) => <TextField {...params} />}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                /> */}
              </form>
            {/* </LocalizationProvider> */}
        </div>
      </Modal>
    </>
  );
};

export default ReservationList;
