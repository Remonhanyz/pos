import Image from "next/image";
import React from "react";

import divider from "../../public/images/divider.svg";
import Card from "../Card";
import styles from "./index.module.scss";

const OrdersInfo = ({ type }) => {
  return (
    <Card className={`m-0`} outerClassName={`m-0`}>
      <div className={`row m-0 p-0 position-relative`}>
        {(type == "Dinne Inn") && (
          <div className={`${styles.table}  text-center`}>
            <div>Table</div> <div>12</div>
          </div>
        )}
        {(type === "Delivery" || type === "Take Away") && (
          <>
            <div className={`${styles.title} col-12 pt-1 pb-2`}>
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
          </>
        )}

        {type === "Delivery" && (
          <>
            {" "}
            <div className={`pt-3 row m-0 p-0`}>
              <div className={`${styles.subTitle} col-3`}>Address:</div>
              <div className={`${styles.text} col-9`}>
                64 Elsharabasy Street - Building 4 Floor 2 - Appartment 2{" "}
              </div>
            </div>
            <div className={`${styles.title} col-12 pt-5 pb-2`}>
              Deliver Man
            </div>
            <div className={`col-6 ${styles.border}`}>
              <div className={`${styles.subTitle} col-12`}>Delivey Name:</div>
              <div className={`${styles.text} col-12`}>Samy Ahmed Ali</div>
            </div>
            <div className={`col-6 ps-4`}>
              <div className={`${styles.subTitle} col-12`}>Delivery Phone:</div>
              <div className={`${styles.text} col-12`}>01064336867</div>
            </div>
          </>
        )}
        <div className="pt-4 row pb-2">
          <div className={`col-8 ${styles.subPriceText}`}>Quantity</div>
          <div className={`col-4 ${styles.subPriceNumber} text-end`}>3x</div>

          <div className={`col-8 ${styles.subPriceText}`}>Subtotal</div>
          <div className={`col-4 ${styles.subPriceNumber} text-end`}>
            72 EGP
          </div>
          <div className={`col-8 ${styles.subPriceText}`}>taxes</div>
          <div className={`col-4 ${styles.subPriceNumber} text-end`}>
            12 EGP
          </div>
          <div className="py-2">
            <Image src={divider} alt="divider" layout="responsive" />
          </div>
          <div className={`col-8 ${styles.totalText}`}>Total</div>
          <div className={`col-4 ${styles.totalNumber} text-end`}>84 EGP</div>
        </div>
      </div>
    </Card>
  );
};

export default OrdersInfo;
