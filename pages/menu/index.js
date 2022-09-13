import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { RiPrinterFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { pageInMove, pageOutMove, rightToLeft } from "../../animation";
import Button from "../../components/Button";
import Floors from "../../components/Floors";
import FoodType from "../../components/FoodType";
import ItemsList from "../../components/ItemsList";
import OrderBillMain from "../../components/OrderBillMain";
import OrderType from "../../components/OrderType";
import PrintableBill from "../../components/PrintableBill";
import PrintableBillSummery from "../../components/PrintableBillSummery";
import ReservationList from "../../components/ReservationList";
import ReserverDetails from "../../components/ReserverDetails";
import SideBar from "../../components/SideBar";
import TableSelector from "../../components/TableSelector";
import { setPrintState } from "../../redux-state/reducer/printReducer";
import styles from "./index.module.scss";

const Menu = () => {
  const [orderType, setOrderType] = useState("Dine Inn");
  const [foodType, setfoodType] = useState("Pizza");
  const [floor, setFloor] = useState("First Floor");
  const [isTables, setIsTables] = useState(true);
  const printState = useSelector((state) => state.printState.data);
  const dispatch = useDispatch();

  return (
    <>
      <DndProvider
        backend={HTML5Backend}
        options={{ enableTouchEvents: false, enableMouseEvents: true }}
      >
        <motion.div
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          variants={pageOutMove()}
          initial="hidden"
          animate={`${!printState ? "visible" : "exit"}`}
          exit="exit"
          transition={{ type: "linear", delay: 1.1, x: { duration: 1.1 } }}
          className={`row mx-0 px-0 pt-4 pb-0 mb-0 h-100 `}
        >
          <div className={`col-xxl-9 col-lg-8 col-md-6 col-12 h-100`}>
            <OrderType orderType={orderType} setOrderType={setOrderType} />
            {(orderType == "Take Away" ||
              orderType == "Delivery" ||
              (orderType == "Dine Inn" && !isTables)) && (
              <FoodType
                orderType={orderType}
                foodType={foodType}
                setfoodType={setfoodType}
              />
            )}
            {(orderType == "Take Away" ||
              orderType == "Delivery" ||
              (orderType == "Dine Inn" && !isTables)) && (
              <ItemsList orderType={orderType} foodType={foodType} />
            )}
            {orderType == "Dine Inn" && isTables && (
              <Floors orderType={orderType} floor={floor} setFloor={setFloor} />
            )}
            {orderType == "Dine Inn" && isTables && (
              <TableSelector
                orderType={orderType}
                floor={floor}
                setIsTables={setIsTables}
              />
            )}
            {orderType == "Reservation" && (
              <ReservationList
                orderType={orderType}
                floor={floor}
                setIsTables={setIsTables}
              />
            )}
          </div>
          <div className={`col-xxl-3 col-lg-4 col-md-6 col-12 h-100`}>
            <OrderBillMain orderType={orderType} />
            {orderType == "Reservation" && <ReserverDetails />}
          </div>
        </motion.div>
      </DndProvider>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {printState && (
          <motion.div
            whileInView={{ opacity: 1 }}
            variants={pageInMove()}
            viewport={{ once: true }}
            initial="hidden"
            animate={`${printState ? "visible" : "exit"}`}
            exit="exit"
            className={`row position-absolute h-100 top-0 left-0 ${styles.container} `}
          >
            <div className={`col-1 h-100 m-0 p-0 `}>
              <SideBar />
            </div>
            <div className={`col-1 d-none d-xl-flex m-0 p-0`}></div>
            <div
              className={`col-xl-4 col-md-6 col-11 m-0 p-0 h-100 d-flex align-items-center justify-content-center`}
            >
              <PrintableBill />
            </div>
            <div className={`col-1 d-none d-xl-flex m-0 p-0`}></div>
            <div
              className={`col-4 p-0 m-0 d-flex flex-column h-100 align-items-center justify-content-center`}
            >
              <PrintableBillSummery />
              <Button className={`${styles.print} mt-5 p-2 px-5`}>
                <RiPrinterFill fontSize={20} className="me-2" /> Confirm Print
              </Button>
              <Button
                className={`${styles.cancel} mt-3 p-2 px-5`}
                onClick={() => dispatch(setPrintState(false))}
              >
                Cancel
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
