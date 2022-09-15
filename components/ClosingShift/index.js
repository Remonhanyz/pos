import { faker } from "@faker-js/faker";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { easeQuadInOut } from "d3-ease";
import Image from "next/image";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

import delivery from "../../public/images/delivery.svg";
import dineIn from "../../public/images/dinne_in.svg";
import hi from "../../public/images/hi.svg";
import orders from "../../public/images/orders.svg";
import takeAway from "../../public/images/take_away.svg";
import Card from "../Card";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import styles from "./index.module.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
};
const labels = ["08:00", "10:00", "12:00", "02:00", "04:00", "06:00", "08:00"];
export const data = {
  labels,
  datasets: [
    {
      label: "Balance During Day",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 3000 })),
      borderColor: "#8193F7",
      pointRadius: "0",
      backgroundColor: "#8193F7",
    },
  ],
};
const ClosingShift = () => {
  const percentage = 83;
  return (
    <>
      <div className="row m-0 h-100">
        <div className="col-4 h-100">
          <Card className={`h-100 overflow-auto`} outerClassName={`h-100 py-4`}>
            <div className={`mt-4 d-flex ${styles.title}`}>
              Good Evening Mr. Mohamed{" "}
              <div className={`${styles.image}`}>
                <Image src={hi} alt="hi" width={27} />
              </div>
            </div>
            <div className={`${styles.description}`}>
              At the end of Sunday, may 15, 2022, we hope that you have achieved
              a rewarding shift.
            </div>
            <div className={`row d-flex align-items-center`}>
              <AnimatedProgressProvider
                valueStart={0}
                valueEnd={66}
                duration={1.4}
                easingFunction={easeQuadInOut}
                repeat
              >
                <CircularProgressbarWithChildren
                  circleRatio={0.7}
                  strokeWidth={1.5}
                  value={percentage}
                  styles={buildStyles({
                    rotation: 0.65,
                    strokeLinecap: "round",
                    pathTransitionDuration: 0.5,
                    pathColor: `#28C76F`,
                    trailColor: "#eee",
                    alignItems: "center",
                  })}
                >
                  <div className={`${styles.percent}`}>{percentage}%</div>
                </CircularProgressbarWithChildren>
              </AnimatedProgressProvider>
            </div>
            <div className="row pb-3">
              <div className={`col-6 ${styles.tableLeft}`}>
                <div className={`${styles.tableTitle} mt-3 text-center`}>
                  start at
                </div>
                <div className={`${styles.tableText} text-center`}>
                  08:00 am
                </div>
              </div>
              <div className={`col-6 ${styles.tableRight}`}>
                <div className={`${styles.tableTitle} mt-3 text-center`}>
                  end at
                </div>
                <div className={`${styles.tableText} text-center`}>
                  08:00 pm
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div
          className={`col-8 d-flex flex-column  h-100 py-3`}
        >
          <Card outerClassName={`mt-2`}>
            <div>Statistics</div>
            <div className="d-flex flex-wrap my-3">
              <div className="col-6 col-lg-3 d-flex">
                <div className={`${styles.image_background} d-flex align-items-center`}>
                  <Image src={orders} alt="orders" />
                </div>
                <div className="ps-3">
                  <div className={`${styles.tableText}`}>230</div>
                  <div className={`${styles.tableTitle}`}>orders</div>
                </div>
                
              </div>
                            <div className="col-6 col-lg-3 d-flex">
                <div className={`${styles.image_background} d-flex align-items-center`}>
                  <Image src={takeAway} alt="take away" />
                </div>
                <div className="ps-3">
                  <div className={`${styles.tableText}`}>100</div>
                  <div className={`${styles.tableTitle}`}>take away</div>
                </div>
                
              </div>
              <div className="col-6 col-lg-3 d-flex">
                <div className={`${styles.image_background} d-flex align-items-center`}>
                  <Image src={delivery} alt="delivery" />
                </div>
                <div className="ps-3">
                  <div className={`${styles.tableText}`}>30</div>
                  <div className={`${styles.tableTitle}`}>delivery</div>
                </div>
                
              </div>
              <div className="col-6 col-lg-3 d-flex">
                <div className={`${styles.image_background} d-flex align-items-center`}>
                  <Image src={dineIn} alt="dine In" />
                </div>
                <div className="ps-3">
                  <div className={`${styles.tableText}`}>100</div>
                  <div className={`${styles.tableTitle}`}>Dine in</div>
                </div>
                
              </div>

            </div>
          </Card>
          <Card
            className={`${styles.overflow} px-4 overflow-auto`}
            outerClassName={`mt-3`}
          >
            <div className="row my-3">
              <div className="col-lg-3 col-6">
                <div className={`text-center w-100 ${styles.tableTitle}`}>
                  start balance
                </div>
                <div className={`text-center w-100 ${styles.tableText}`}>
                  200 EGP
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className={`text-center w-100 ${styles.tableTitle}`}>
                  end balance
                </div>
                <div className={`text-center w-100 ${styles.tableText}`}>
                  3000 EGP
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className={`text-center w-100 ${styles.tableTitle}`}>
                  total cash
                </div>
                <div className={`text-center w-100 ${styles.tableText}`}>
                  20 client
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className={`text-center w-100 ${styles.tableTitle}`}>
                  total visa
                </div>
                <div className={`text-center w-100 ${styles.tableText}`}>
                  15 client
                </div>
              </div>
            </div>
            <div className=" d-flex flex-column mt-2">
              <div className={`${styles.big_title} pb-4`}>Balance During Day</div>
              <Line options={options} data={data}  className='mb-5'/>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ClosingShift;
