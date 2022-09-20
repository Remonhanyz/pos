import React from "react";

import Card from "../Card";
import styles from "./index.module.scss";

const OrdersItemsList = () => {
  return (
    <Card outerClassName={`ps-3`}>
      <div className={`overflow-auto ${styles.container}`}>
        <table className={`table table-borderless my-0 ${styles.table}`}>
          <thead className="table-light">
            <tr>
              <td className={`${styles.table_header} ps-3`}>Item</td>
              <td className={`${styles.table_header}`}>Size</td>
              <td className={`${styles.table_header}`}>Qty</td>
              <td className={`${styles.table_header}`}>Price</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`col-5 ps-3`}>Fettuccine Chicken Alfredo</td>
              <td className={`col-2 ${styles.size}`}>M</td>
              <td className={`col-2 ${styles.quantity}`}>1x</td>
              <td className={`col-3  ${styles.price}`}>100 EGP</td>
            </tr>
            <tr>
              <td className={`col-5 ps-3`}>Fettuccine Chicken Alfredo</td>
              <td className={`col-2 ${styles.size}`}>M</td>
              <td className={`col-2 ${styles.quantity}`}>1x</td>
              <td className={`col-3  ${styles.price}`}>100 EGP</td>
            </tr>
            <tr>
              <td className={`col-5 ps-3`}>Fettuccine Chicken Alfredo</td>
              <td className={`col-2 ${styles.size}`}>M</td>
              <td className={`col-2 ${styles.quantity}`}>1x</td>
              <td className={`col-3  ${styles.price}`}>100 EGP</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default OrdersItemsList;
