import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { MdForwardToInbox } from "react-icons/md";

import { downToUp } from "../../animation";
import Button from "../../components/Button";
import Card from "../../components/Card";
import hi from "../../public/images/hi.svg";
import circle from "../../public/images/welcome_circle.svg";
import styles from "./index.module.scss";

const ShiftStart = ({ setIsShiftStarted }) => {
  return (
    <motion.div
      variants={downToUp}
      initial="hidden"
      animate="visible"
      className={`${styles.noScroll} h-100`}
    >
      <Card
        style={{ width: "100%", height: "100%" }}
        className={`${styles.card} align-items-center justify-content-center d-flex`}
        margin="5rem"
        outerClassName={"h-100"}
      >
        <div className={`d-flex flex-wrap text-break row`}>
          <div
            className={`d-flex flex-wrap text-break flex-column col-12 col-lg-6 align-items-center justify-content-center `}
          >
            <div
              className={`d-flex flex-wrap text-break flex-column ps-4 align-items-center align-items-lg-start justify-content-center `}
            >
              <div
                className={`d-flex flex-wrap text-break text-lg-start text-center ${styles.title}`}
              >
                Welcome Mr. Mohamed{" "}
                <div className={`${styles.image}`}>
                  <Image src={hi} alt="hi" width={29} />
                </div>
              </div>
              <div
                className={`d-flex flex-wrap text-break text-lg-start text-center ${styles.description}`}
              >
                Today is Sunday, May 15, 2022, let&apos;s start work. <br />
                Have a good day
              </div>
              <Button
                text="start"
                style={{ marginTop: 20, width: 130 }}
                onClick={() => setIsShiftStarted(true)}
              >
                Start
              </Button>
            </div>
          </div>
          <div
            className={`d-flex col-12 col-lg-6 px-0 align-items-center justify-content-center`}
          >
            <div
              className={`d-flex flex-wrap position-relative px-0 w-100 h-100  ${styles.circle}`}
            >
              <div
                className={`d-flex col-6 position-absolute align-items-center justify-content-center w-100 h-100 ${styles.time}`}
              >
                00 : 00
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ShiftStart;
