import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./style.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const [firebaseError, setFirebaseError] = useState(null);
  const navigate = useNavigate();
  const defaultValue = {
    name: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
  };

  const validation = yup.object().shape({
    name: yup.string().required("Please Enter Your Name"),
    email: yup
      .string()
      .required("Please Enter Your Email")
      .email("Please Enter Valid Email"),
    contact: yup.string().required("Please Enter Your Contact"),
    password: yup.string().required("Please Enter Your Password"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Please Confirm Password"),
    termsAndConditions: yup
      .boolean()
      .oneOf([true], "Please Accept Terms and Conditions"),
  });

  const handleSubmit = async (values) => {
    try {
      const { email, password } = values;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User registered:", user);
      alert("User Registered Successfully");
      navigate("/login");
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        console.error(
          "Invalid email format. Please provide a valid email address."
        );
      } else {
        console.error("Registration error:", error);
        setFirebaseError(error.message);
      }
    }
  };

  return (
    <div className="signup-container">
      <h2>Get Started By Joining Us</h2>

      <Formik
        initialValues={defaultValue}
        validationSchema={validation}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <Field type="text" name="name" id="name" />
            <p className="danger-message">
              <ErrorMessage name="name" />
            </p>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <Field type="text" name="email" id="email" />
            <p className="danger-message">
              <ErrorMessage name="email" />
            </p>
          </div>

          <div className="form-group">
            <label htmlFor="contact">Contact Number</label>
            <Field type="text" name="contact" id="contact" />
            <p className="danger-message">
              <ErrorMessage name="contact" />
            </p>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" id="password" />
            <p className="danger-message">
              <ErrorMessage name="password" />
            </p>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field
              type="password"
              name="confirmPassword"
              id="confirmPassword"
            />
            <p className="danger-message">
              <ErrorMessage name="confirmPassword" />
            </p>
          </div>

          <div className="form-group">
            <label>
              <Field type="checkbox" name="termsAndConditions" />
              <br />I Accept Terms and Conditions
            </label>
            <p className="danger-message">
              <ErrorMessage name="termsAndConditions" />
            </p>
          </div>
          {firebaseError && (
            <div className="danger-message">{firebaseError}</div>
          )}
          <div className="butt">
            <button type="submit">Sign Up</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default SignUp;
