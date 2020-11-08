import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import { nextStep } from "../../redux/actions/influencersActions";
import * as yup from "yup";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
const StepOne = ({ nextStep, inputChange, formData, setFormData, values }) => {
  const schema = yup.object({
    firstName: yup.string().required("First Name is Required"),
    lastName: yup.string().required("Last Name is Required"),
    email: yup.string().email("Email is Required").required(),
    phoneNumber: yup.number().required("Phone Number is Required"),
    address: yup.object({
      street: yup.string().required("Street is Required"),
      city: yup.string().required("City is Required"),
      country: yup.string().required("Country is Required"),
      state: yup.string().required("State is Required"),

      zip: yup.string().required("Zip is Required"),
    }),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => {
        setFormData(values);
        nextStep();
      }}
      initialValues={formData}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        isInvalid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          {console.log(values, !!errors.address)}
          <Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name={"firstName"}
                  placeholder="First Name"
                  value={values.firstName}
                  onChange={handleChange}
                  isInvalid={!!errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name={"lastName"}
                  placeholder="Last Name"
                  value={values.lastName}
                  onChange={handleChange}
                  isInvalid={!!errors.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name={"email"}
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />{" "}
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>PhoneNumber</Form.Label>
                <Form.Control
                  placeholder="Phone Number"
                  type="tel"
                  name={"phoneNumber"}
                  value={values.phoneNumber}
                  onChange={handleChange}
                  isInvalid={!!errors.phoneNumber}
                />{" "}
                <Form.Control.Feedback type="invalid">
                  {errors.phoneNumber}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  placeholder="1234 Main St"
                  name={"address.street"}
                  onChange={handleChange}
                  isInvalid={!!errors.address && errors.address.street}
                  value={values.address.street || ""}
                />{" "}
                {errors.address && errors.address.street ? (
                  <Form.Control.Feedback type="invalid">
                    {errors.address.street}
                  </Form.Control.Feedback>
                ) : (
                  ""
                )}
                <Form.Control.Feedback type="invalid">
                  {errors.street}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="address">
                <Form.Label>City</Form.Label>
                <Form.Control
                  name={"address.city"}
                  value={values.address.city || ""}
                  onChange={handleChange}
                  isInvalid={!!errors.address && errors.address.city}
                />{" "}
                {errors.address && errors.address.city ? (
                  <Form.Control.Feedback type="invalid">
                    {errors.address.city}
                  </Form.Control.Feedback>
                ) : (
                  ""
                )}
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="address">
                <Form.Label>State</Form.Label>
                <Form.Control
                  name={"address.state"}
                  onChange={handleChange}
                  isInvalid={!!errors.address && errors.address.state}
                  value={values.address.state || ""}
                />
                {}
                {errors.address && errors.address.state ? (
                  <Form.Control.Feedback type="invalid">
                    {errors.address.state}
                  </Form.Control.Feedback>
                ) : (
                  ""
                )}
              </Form.Group>
              <Form.Group as={Col} controlId="address">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  name="country"
                  name={"address.country"}
                  onChange={handleChange}
                  isInvalid={!!errors.address && errors.address.country}
                  value={values.address.country || ""}
                />{" "}
                {errors.address && errors.address.country ? (
                  <Form.Control.Feedback type="invalid">
                    {errors.address.country}
                  </Form.Control.Feedback>
                ) : (
                  ""
                )}
              </Form.Group>

              <Form.Group as={Col} controlId="address">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  name={"address.zip"}
                  onChange={handleChange}
                  isInvalid={!!errors.address && errors.address.zip}
                  value={values.address.zip || ""}
                />{" "}
                {errors.address && errors.address.zip ? (
                  <Form.Control.Feedback type="invalid">
                    {errors.address.zip}
                  </Form.Control.Feedback>
                ) : (
                  ""
                )}
              </Form.Group>
            </Form.Row>
          </Form.Group>
          <br />

          <div className="text-right">
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default connect(null, {
  nextStep,
})(StepOne);
