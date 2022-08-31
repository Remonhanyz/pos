import classes from "./inndex.module.scss";
import { GoSettings } from "react-icons/go";
// import { GoSettings } from "react-icons";
import { motion } from "framer-motion";
import { rightToLeft } from "../../animation";
const Headline = () => {
  return (
    <motion.div
      variants={rightToLeft(0.8)}
      initial="hidden"
      animate="visible"
      className="col-lg-12 d-flex justify-content-between"
    >
      <div className="info">
        <h5>Today Orders</h5>
      </div>
      <div className={`${classes.searchFilter}`}>
        <GoSettings className={`${classes.icon}`} />
        <input type="text" className={`form-control ${classes.orderForm}`} />
      </div>
    </motion.div>
  );
};

export default Headline;
