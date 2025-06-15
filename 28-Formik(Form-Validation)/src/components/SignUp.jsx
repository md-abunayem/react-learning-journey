import React from "react";
import { useFormik } from "formik";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values)=>{
        console.log(values);
    }
  });
  //output at browser console

  return (
    <>
      <h1>SignUp</h1>
      <form action="" onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formik.values.name}
            required
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            required
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formik.values.password}
            required
            onChange={formik.handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SignUp;
