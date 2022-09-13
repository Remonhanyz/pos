import { motion } from "framer-motion";
import React from "react";

import { rightToLeft } from "../../animation";
import Card from "../Card";
import styles from "./index.module.scss";

const ReserverDetails = () => {
  return (
    <motion.div
      className="h-100 m-0"
      variants={rightToLeft({ type: "linear" })}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Card
        outerClassName={`h-100 pb-3 ${styles.card} p-0 m-0`}
        className="h-100 p-2 m-0"
      >
        <div className={`overflow-auto h-100`}>
          <div className={`${styles.header} row p-3`}>
            January 23, 2022 - 8:15pm
          </div>
          <div className={`row`}>
            <div className={`${styles.title} col-12 pt-4 pb-2`}>
              Client Information
            </div>
            <div className={`col-6 ${styles.border}`}>
              <div className={`${styles.subTitle} col-12`}>Client Name:</div>
              <div className={`${styles.text} col-12`}>Ahmed Ali Nour</div>
            </div>
            <div className={`col-6 ps-4`}>
              <div className={`${styles.subTitle} col-12`}>Client Phone:</div>
              <div className={`${styles.text} col-12`}>01012345667</div>
            </div>
            <div className={`${styles.title} col-12 pt-5 pb-2`}>
              Reservation Details
            </div>
            <div className="row">
              <div className={`${styles.subTitle} col-12`}>
                Reservation Date:
              </div>
              <div className={`${styles.text} col-12 `}>January 23, 2022</div>
            </div>
            <div className="row mt-3">
              <div className={`col-6 ${styles.border}`}>
                <div className={`${styles.subTitle} col-12`}>From:</div>
                <div className={`${styles.text} col-12`}>8:15 pm</div>
              </div>
              <div className={`col-6 ps-4`}>
                <div className={`${styles.subTitle} col-12`}>To:</div>
                <div className={`${styles.text} col-12`}>8:15 pm</div>
              </div>
            </div>
            <div className="row mt-3">
              <div className={`${styles.subTitle} col-12`}>Members No:</div>
              <div className={`${styles.text} col-12 `}>8 Members</div>
            </div>
            <div className="row mt-3">
              <div className={`${styles.subTitle} col-12`}>Comment:</div>
              <div className={`${styles.text} col-12 `}>
                I Want To Eat Outdoor Terrace
              </div>
            </div>
            <div className={`${styles.title} col-12 pt-5 pb-2`}>Tables</div>
            <div className="row mt-3">
              <div className={`py-1 ${styles.tableNumber} mb-3`}>23</div>
              <div className={`py-1 ${styles.tableNumber} mb-3`}>2</div>
              <div className={`py-1 ${styles.tableNumber} mb-3`}>2</div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ReserverDetails;
