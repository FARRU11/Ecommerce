import "./style.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function Contact() {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    message: yup.string().required("Message is required"),
  });
  const handleSubmit = async () => {
    {
      alert("Message Sent Successfully");
    }
  };
  return (
    <div className="container-full">
      <h1>Contact Us</h1>
      <p>
        If you have any questions or need assistance, please feel free to
        contact us:
      </p>
      <div className="contact-box">
        <div className="contact-info">
          <h2>You Can Also Reach Us Here</h2>
          <div className="contact-item">📧 Email: danishraffiq67@gmail.com</div>
          <div className="contact-item">☎ Phone: +92 (308) 455-4648</div>
          <div className="contact-item">
            📍 Address: Pindi Rajputa Kot Lakhpat, Lahore
          </div>
        </div>
        <div className="contact-form">
          <h2>Send Us A Message</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <Field as="textarea" id="message" name="message" rows="4" />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="error-message"
                />
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Contact;
