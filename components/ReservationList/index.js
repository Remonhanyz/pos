import { motion } from "framer-motion";
import React from "react";
import { IoCalendar } from "react-icons/io5";

import { downToUpChangable } from "../../animation";
import Button from "../Button";
import ClientDetailsCard from "../ClientDetailsCard";
import styles from "./index.module.scss";

const ReservationList = ({ orderType }) => {
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
        <div className={`col-6 ${styles.title} ps-3`}>Today's Reservation</div>
        <div className={`col-6 d-flex justify-content-end`}>
          <button className={`${styles.button} mx-2`}>
            <IoCalendar size={20} />
          </button>
          <Button className={`px-3`}> New Reservation</Button>
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
    </>
  );
};

export default ReservationList;
