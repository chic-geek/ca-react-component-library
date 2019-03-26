import React from "react";
import FormContainer from "../../FormContainer/component";
import FormLabel from "../../FormLabel/component";
import FormInput from "../../FormInput/component";

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
                <div className="text-input">
                  <FormLabel htmlFor="username" classNames="block bold mb-2">
                    Username
                  </FormLabel>
                  <FormInput
                    type="text"
                    id="username"
                    name="username"
                    value={values.username}
                    handleChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="text-input">
                  <FormLabel htmlFor="password" classNames="block bold mb-2">
                    Password
                  </FormLabel>
                  <FormInput
                    type="text"
                    id="password"
                    name="password"
                    value={values.password}
                    handleChange={handleChange}
                  />
                </div>
              </div>
            </fieldset>
          </form>
        )}
      </FormContainer>
    );
  }
}

export default SignInForm;
