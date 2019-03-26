import React from "react";
import FormContainer from "../../FormContainer/component";
import TextInput from '../../TextInput';
import Checkbox from "../../Checkbox";

const initialState = {
  firstname: "",
  lastname: "",
  emailAddress: "",
  username: "",
  password: "",
  acceptTerms: "",
};

class SignUpForm extends React.Component {
  render() {
    return (
      <FormContainer initialValues={initialState}>
        {({ values, handleChange }) => (
          <form>
            <fieldset className="b-none p-0 m-0">
              <legend className="h2">Sign up form</legend>

              <div className="mb-3">
                <TextInput
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={values.firstname}
                  handleChange={handleChange}>
                  Firstname
                </TextInput>
              </div>

              <div className="mb-3">
                <TextInput
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={values.lastname}
                  handleChange={handleChange}>
                  Lastname
                </TextInput>
              </div>

              <div className="mb-3">
                <TextInput
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  value={values.emailAddress}
                  handleChange={handleChange}>
                  Email address
                </TextInput>
              </div>

              <div className="mb-3">
                <TextInput
                  type="text"
                  id="username"
                  name="username"
                  value={values.username}
                  handleChange={handleChange}>
                  Username
                </TextInput>
              </div>

              <div className="mb-5">
                <TextInput
                  type="password"
                  id="password"
                  name="password"
                  value={values.password}
                  handleChange={handleChange}>
                  Password
                </TextInput>
              </div>

              <div className="mb-3">
                <Checkbox
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={values.acceptTerms}
                  handleChange={handleChange}>
                  I accept the <a href="javascript:void(0)">Terms and Conditions</a>
                </Checkbox>
              </div>
            </fieldset>
          </form>
        )}
      </FormContainer>
    );
  }
}

export default SignUpForm;
