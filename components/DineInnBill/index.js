import Image from "next/image";
import React from "react";
import { useDrop } from "react-dnd";

import divider from "../../public/images/divider.svg";
import BillOptions from "../BillOptions";
import BillOrderCard from "../BillOrderCard";
import styles from "./index.module.scss";

const DineInnBill = ({ isTables, setIsTables }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "div",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop: (item) => {
      console.log(item);
    },
  }));

  return (
    <div className={`${styles.container} d-flex flex-column`}>
      <div className="row p-0 m-0">
        <div className={`col-6 ${styles.orderNumber} row p-0 m-0`}>
          <div className="col-12 p-0 m-0">Order Bill # 1</div>
          <div className={`${styles.orderDate} col-12 p-0 m-0`}>
            January 23, 2022 - 5:00pm
          </div>
        </div>
        <div className={`col-6 ${styles.orderType} text-end row p-0 m-0`}>
          <div className="dropdown col-8 p-0 m-0 align-items-center d-flex justify-content-center px-2">
            <a
              className={`btn btn-secondary dropdown-toggle  ${styles.dropdown_menu}`}
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className={`${styles.drop_down} text-start`}>Empty</div>
            </a>

            <ul className={`dropdown-menu w-100`}>
              <li>
                <a className={`dropdown-item ${styles.dropdown_item}`} href="#">
                  Action
                </a>
              </li>
              <li>
                <a className={`dropdown-item ${styles.dropdown_item}`} href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className={`dropdown-item ${styles.dropdown_item}`} href="#">
                  Something else
                </a>
              </li>
            </ul>
          </div>

          <div className={`${styles.tableNumber} col-4 text-center m-0`}>
            Table 12
          </div>
        </div>
        {!isTables && (
          <div
            ref={drop}
            className={`pt-3 d-flex flex-column overflow-auto pe-1 h-100 m-0 p-0`}
          >
            <BillOrderCard
              title="Fettuccine Chicken Alferdo"
              price="68.34"
              size={"M"}
              quantity="1"
            />
            <BillOrderCard
              title="Spicy - Fettuccine Chicken"
              price="68.34"
              size={"S"}
              quantity="1"
            />
            <BillOrderCard
              title="Fettuccine Chicken Alferdo"
              price="68.34"
              size={"M"}
              quantity="1"
            />
          </div>
        )}
      </div>
      <div className="mt-auto row">
        {!isTables && (
          <>
            {" "}
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
          </>
        )}
        <BillOptions setIsTables={setIsTables} />
      </div>
    </div>
  );
};

export default DineInnBill;
