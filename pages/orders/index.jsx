import classes from "./inndex.module.scss";
import Headline from "./headline";
import OrderDetails from "./../../components/order-details/index";
const Orders = () => {
  return (
    <section className="orders pt-5">
      <div className="container-fluid">
        <div className="row">
          <Headline />
        </div>
        <div className="row">
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
          <div className="col-lg-3">
            <OrderDetails />
          </div>
          <div className="col-lg-3">
            <OrderDetails />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
