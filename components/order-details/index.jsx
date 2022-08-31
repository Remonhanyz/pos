import clasess from "./index.module.scss";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { Formik, Field, Form } from "formik";
import { IoIosArrowDown } from "react-icons/io";

const OrderDetails = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className={`${clasess.orderDetails} mt-3`}>
        <div className={`${clasess.orderTitle}`}>
          <h5>order #1245 details</h5>
        </div>
        <div className={`${clasess.date}`}>
          <p>January 23, 2022 8:15Pm</p>
        </div>
        <div className="row text-center">
          <div className={`col-lg-6 ${clasess.colOption}`}>
            <p>Client Name :</p>
            <p className={`${clasess.text}`}>Ahmed Sami</p>
          </div>

          <div className="col-lg-6">
            <p>Client phone :</p>
            <p className={`${clasess.text}`}>01554043243</p>
          </div>
        </div>
        <div className={`${clasess.status}`}>
          <h5 className={`text-center`}>in the kitchen </h5>
        </div>
        <div className="option d-flex justify-content-between">
          <button
            className={` ${clasess.showDetails} btn btn-primary`}
            style={{ width: "48%" }}
          >
            Show Details
          </button>
          <button
            className={`${clasess.changeStatus} btn btn-primary`}
            style={{ width: "48%" }}
            onClick={handleClickOpen}
          >
            Change Status
          </button>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Change Of Order State"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Formik
              initialValues={{ color: "" }}
              onSubmit={(values, actions) => {
                console.log(values);
              }}
            >
              {() => (
                <Form>
                  <Field as="select" name="color" className="form-control">
                    {/* <option value="">state of order </option> */}
                    <option value="red">red </option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                  </Field>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      width: "100%",
                      display: "inline-block",
                      marginTop: "1rem",
                    }}
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default OrderDetails;
