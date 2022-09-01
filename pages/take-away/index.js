import React, { useState } from "react";
import FoodItem from "../../components/FoodItem";
import FoodType from "../../components/FoodType";
import ItemsList from "../../components/ItemsList";
import OrderBillMain from "../../components/OrderBillMain";
import OrderType from "../../components/OrderType";
import { useSelector } from "react-redux";
import styles from "./index.module.scss";

import { motion } from "framer-motion";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { DragDropContext } from "react-beautiful-dnd";

const TakeAway = () => {
  const [orderType, setOrderType] = useState("Dine Inn");
  const [foodType, setfoodType] = useState("Pizza");
  const printState = useSelector((state) => state.printState.data);
  const variants = {
    hidden: { opacity: 0, y: 200 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 0 },
  };
  return (
    <>
      <DndProvider
        backend={HTML5Backend}
        options={{ enableTouchEvents: false, enableMouseEvents: true }}
      >
        <motion.div
          className={`row mx-0 px-0 pt-4 pb-0 mb-0 h-100 ${
            printState == true && styles.translat
          }`}
        >
          <div className={`col-xxl-9 col-lg-8 col-md-6 col-12 h-100`}>
            <OrderType orderType={orderType} setOrderType={setOrderType} />
            <FoodType
              orderType={orderType}
              foodType={foodType}
              setfoodType={setfoodType}
            />
            <ItemsList orderType={orderType} foodType={foodType} />
          </div>
          <div className={`col-xxl-3 col-lg-4 col-md-6 col-12 h-100`}>
            <OrderBillMain orderType={orderType} />
          </div>
        </motion.div>
      </DndProvider>
      {/* <div

import {motion, AnimatePresence} from "framer-motion";
import {pageInMove, pageOutMove, rightToLeft} from "../../animation";
import PrintableBill from "../../components/PrintableBill";
import PrintableBillSummery from "../../components/PrintableBillSummery";
import SideBar from "../../components/SideBar";
const TakeAway = () => {
	const [orderType, setOrderType] = useState("Dine Inn");
	const [foodType, setfoodType] = useState("Pizza");
	const printState = useSelector((state) => state.printState.data);
	

	return (
		<>
			<motion.div
				variants={pageOutMove()}
				initial="hidden"
				animate={`${!printState ? "visible" : "exit"}`}
				exit="exit"
				transition={{type: "linear", delay: 1.1, x: {duration: 1.1}}}
				className={`row mx-0 px-0 pt-4 pb-0 mb-0 h-100 ${
					printState && "  "
				}`}
			>
				<div className={`col-xxl-9 col-lg-8 col-md-6 col-12 h-100`}>
					<OrderType orderType={orderType} setOrderType={setOrderType} />
					<FoodType
						orderType={orderType}
						foodType={foodType}
						setfoodType={setfoodType}
					/>
					<ItemsList orderType={orderType} foodType={foodType} />
				</div>
				<div className={`col-xxl-3 col-lg-4 col-md-6 col-12 h-100`}>
					<OrderBillMain orderType={orderType} />
				</div>
			</motion.div>
			<motion.div
				variants={pageInMove()}
				initial="hidden"
				animate={`${printState ? "visible" : "hidden"}`}
				exit="exit"
				transition={{
					type: "linear",
					delay: 1.1,
					x: {delay: 1, duration: 1.1}
				}}

				className={`row position-absolute h-100 top-0 left-0 ${styles.container} ${
					!printState && `  d-none `


				className={`row position-absolute top-0 ${
					!printState && " d-none "

				}`}
			>
				<div className={`col-1 h-100 m-0 p-0 `}>
					<SideBar />
				</div>
				<div className={`col-md-6 col-11  m-0 p-0 h-100 d-flex align-items-center justify-content-center`}>
					<PrintableBill />
				</div>
				<div className={`col-5 p-0 m-0 h-100`}>
					<PrintableBillSummery />
				</div>

			</div> */}
    </>
  );
};

export default TakeAway;
