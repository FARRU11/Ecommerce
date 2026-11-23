import { Link, useNavigate, useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./style.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useContext, useState } from "react";
import AuthContext from "../../context/authLogin/authContext";

function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const initialValues = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const location = useLocation();
  let loc = location.state?.redirectedFrom.pathname;

  console.log(location);
  console.log(loc);
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleSubmit = async (values) => {
    try {
      const { email, password } = values;
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setErrorMessage("");
      const user = userCredential.user;
      console.log("User logged in:", user);
      setIsLoggedIn(true);

      if (loc === "/cart") {
        navigate(loc);
      } else {
        navigate(-1);
      }
    } catch (error) {
      console.log("Login error:", error);
      setErrorMessage("Incorrect email or password");
    }
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Please Enter Your Email")
      .email("Please Enter a Valid Email"),
    password: yup.string().required("Please Enter Your Password"),
  });

  return (
    <div className="login-container">
      <h2>Login to Your Account</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <p className="danger-message">
              <ErrorMessage name="email" />
            </p>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
            <p className="danger-message">
              <ErrorMessage name="password" />
            </p>
          </div>
          <div className="but">
            <button type="submit">Login</button>
          </div>
        </Form>
      </Formik>
      <p>
        Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
