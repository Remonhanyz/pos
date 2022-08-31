import classes from "./inndex.module.scss";
import Headline from "./headline";
import OrderDetails from "./../../components/order-details/index";
import { motion } from "framer-motion";
import { downToUp } from "../../animation";
const Orders = () => {
  return (
    <motion.section className="orders pt-5">
      <div className="container">
        <motion.div className="row">
          <Headline />
        </motion.div>
        <motion.div
          variants={downToUp}
          animate="visible"
          initial="hidden"
          className="row"
        >
          <div className="col-lg-3">
            <OrderDetails />
          </div>
          <div className="col-lg-3">
            <OrderDetails />
          </div>
          <div className="col-lg-3">
            <OrderDetails />
          </div>
          <div className="col-lg-3">
            <OrderDetails />
          </div>
          <div className="col-lg-3">
            <OrderDetails />
          </div>
          <div className="col-lg-3">
            <OrderDetails />
          </div>
          <div className="col-lg-3">
            <OrderDetails />
          </div>
          <div className="col-lg-3">
            <OrderDetails />
          </div>
          <div className="col-lg-3">
            <OrderDetails />
          </div>
          <div className="col-lg-3">
            <OrderDetails />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Orders;
