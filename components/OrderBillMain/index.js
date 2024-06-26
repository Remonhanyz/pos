import React, { useState } from "react";



import BillTabs from "../BillTabs";
import DeliveryBill from "../DeliveryBill";
import DineInnBill from "../DineInnBill";
import TakeAwayBill from "../TakeAwayBill";


const OrderBillMain = ({ orderType, isTables, setIsTables }) => {
  const data = [
    {
      label: 1,
      value: 1,
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: 2,
      value: 2,
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },

    {
      label: 3,
      value: 3,
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're 
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  return (
    <>
      {orderType !== "Reservation" && (
        <BillTabs tabsData={data}>
          {orderType == "Take Away" && data.length > 0 && <TakeAwayBill />}
          {orderType == "Delivery" && data.length > 0 && <DeliveryBill />}
          {orderType == "Dine Inn" && data.length > 0 && <DineInnBill setIsTables={setIsTables} isTables={isTables}/>}
          {/* <TakeAwayBill /> */}
        </BillTabs>
      )}
    </>
  );
};

export default OrderBillMain;