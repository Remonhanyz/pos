import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Form, Formik, useFormik } from "formik";
import * as React from "react";
import * as yup from "yup";


export default function Testing() {
  const [value, setValue] = React.useState(null);
  const validationSchema = yup.object({
    date: yup
      .string("Enter date")
      .required("date is required"),
  });
  const formik = useFormik({
    initialValues: {
      date: new Date("2015-03-25"),
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form className="w-100 m-4 px-4" onSubmit={formik.handleSubmit}>
        <DatePicker
          label="date"
          renderInput={(params) => <TextField {...params} />}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </form>
    </LocalizationProvider>
  );
}