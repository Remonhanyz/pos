import React, { useEffect } from "react";
import Card from "../Card";
import ItemCard from "../ItemCard";
import styles from "./index.module.scss";
import { motion } from "framer-motion";

const ItemsList = ({ orderType, foodType }) => {
  const variants = {
    hidden: { opacity: 0, y: 200 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 0 },
  };

  return (
    <>
      {(orderType == "Take Away" || orderType == "Delivery") && (
        <motion.div
          key={foodType + orderType}
          variants={variants}
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.
          transition={{ type: "linear", duration: 0.5 }} // Set the transition to linear
          className={`row ${styles.container}`}
        >
          <div className="col-xl-3 col-lg-4 col-md-6 col-xs-12">
            <ItemCard />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-xs-12">
            <ItemCard />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-xs-12">
            <ItemCard />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-xs-12">
            <ItemCard />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-xs-12">
            <ItemCard />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-xs-12">
            <ItemCard />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-xs-12">
            <ItemCard />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-xs-12">
            <ItemCard />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-xs-12">
            <ItemCard />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-xs-12">
            <ItemCard />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-xs-12">
            <ItemCard />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-xs-12">
            <ItemCard />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-xs-12">
            <ItemCard />
          </div>

          {/* <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard /> */}
        </motion.div>
      )}
    </>
  );
};

export default ItemsList;
