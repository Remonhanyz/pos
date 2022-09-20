import React from "react";
import styles from './index.module.scss'
const OrdersBreadcrumb = () => {
  return (
    <>
      <nav className={`${styles.breadcrumb} ps-4`} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Today&apos;s Orders</a>
          </li>
          <li className={`breadcrumb-item active ${styles.order}`} aria-current="page">
            Order #1234 Details
          </li>
        </ol>
      </nav>
    </>
  );
};

export default OrdersBreadcrumb;
