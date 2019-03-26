import React from "react";
import FormContainer from "../../FormContainer/component";
import TextInput from '../../TextInput';

const initialState = {
  username: "",
  password: "",
};

class SignInForm extends React.Component {
  render() {
    return (
      <FormContainer initialValues={initialState}>
        {({ values, handleChange }) => (
          <form>
            <fieldset className="b-none p-0 m-0">
              <legend className="h2">Sign in form</legend>

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

              <div className="mb-3">
                <TextInput
                  type="password"
                  id="password"
                  name="password"
                  value={values.password}
                  handleChange={handleChange}>
                  Password
                </TextInput>
              </div>
            </fieldset>
          </form>
        )}
      </FormContainer>
    );
  }
}

export default SignInForm;
