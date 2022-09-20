import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Box } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { DatePicker, DateTimePicker, TimePicker } from "formik-mui-lab";
import { motion } from "framer-motion";
import { useState } from "react";
import * as React from 'react';

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { render } from 'react-dom';
import { IoCalendar } from "react-icons/io5";



import { downToUpChangable } from "../../animation";
import Button from "../Button";
import ClientDetailsCard from "../ClientDetailsCard";
import Modal from "../Modal";
import styles from "./index.module.scss";


const ReservationList = ({ orderType }) => {
  const [reservationModal, setReservationModal] = useState(false);
  const [dateModal, setDateModal] = useState(false);

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
      <div
        className={`modal fade`}
        tabIndex="-1"
        role="dialog"
        id={`reservationModal`}
        aria-labelledby={`reservationModal`}
        aria-hidden="true"
      >
        <div
          className={`modal-dialog modal-dialog-centered ${styles.module}`}
          role="document"
        >
          <div className="modal-content pt-1">
            <button
              type="button"
              className={`${styles.close} py-0`}
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="modal-body w-100 m-0 p-0 row">
              <div className={``}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationList;