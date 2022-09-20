import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";

import { rightToLeft } from "../../animation";
import Card from "../Card";
import TakeAwayBill from "../TakeAwayBill";
import styles from "./index.module.scss";

const numTabs = 3;

const BillTabs = ({ tabsData, children }) => {
  const [tabIndex, setTabIndex] = useState(1);
  const [data, setData] = useState(tabsData);
  const handleTab = (value) => {
    setTabIndex(value);
  };
  const handleAdd = () => {
    numTabs++;
    setData([
      ...data,
      {
        label: numTabs,
        value: numTabs,
        desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
      },
    ]);
  };

  return (
    <motion.div
      variants={rightToLeft({ type: "linear" })}
      initial="hidden" // Set the initial state to variants.hidden
      animate="visible" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.
      transition={{ type: "linear" }}
      className="h-100"
    >
      <Card
        outerClassName={`h-100 pb-3 ${styles.card}`}
        className="h-100"
        style={{ height: "100%" }}
      >
        <Tabs className={`${styles.tabsContainer}  m-0 p-0`} value={1}>
          <div className="pt-2 d-flex justify-content-start">
            <button
              role={"button"}
              className={`${styles.addButton} d-flex align-items-center justify-content-center`}
              onClick={handleAdd}
            >
              <BsPlusLg fontSize={28} color={"#707070"} />
            </button>
            <TabsHeader className={`d-flex `}>
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  className={`${styles.tabs} ${
                    tabIndex == value && styles.active
                  } ms-3 d-flex align-items-center justify-content-center`}
                  onClick={() => handleTab(value)}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
          </div>
          <TabsBody
            
            animate={{
              mount: { x: 0 },
              unmount: { x: 300 },
            }}
            className={`container p-0 h-100 `}
          >
            <div key={children} className={`h-100`}>
              {data.map(({ value, desc }) => (
                <TabPanel
                  key={value}
                  value={value}
                  className={`${styles.desc} h-100`}
                >
                  {children}
                </TabPanel>
              ))}
            </div>
          </TabsBody>
        </Tabs>
      </Card>
    </motion.div>
  );
};

export default BillTabs;
