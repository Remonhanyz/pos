import React from "react";

import Card from "../Card";
import styles from "./index.module.scss";

const OrdersHeader = ({ type = "Delivery" }) => {
  return (
    <Card outerClassName={`ps-3 pb-3`} className={`pb-4 position-relative`}>
      <div>Order #1234</div>
      <div>January 23, 2022 - 8:15pm</div>
      <div className={`${styles.floating} p-2 px-3`}>{type}</div>
    </Card>
  );
};

export default OrdersHeader;
