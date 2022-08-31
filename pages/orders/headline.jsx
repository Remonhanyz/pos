import classes from "./inndex.module.scss";
import { GoSettings } from "react-icons/go";
// import { GoSettings } from "react-icons";
const Headline = () => {
  return (
    <div className="col-lg-12 d-flex justify-content-between">
      <div className="info">
        <h5>Today Orders</h5>
      </div>
      <div className={`${classes.searchFilter}`}>
        <GoSettings className={`${classes.icon}`} />
        <input type="text" className={`form-control ${classes.orderForm}`} />
      </div>
    </div>
  );
};

export default Headline;
