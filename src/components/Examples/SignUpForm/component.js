import React from "react";
import FormContainer from "../../FormContainer/component";
import FormLabel from "../../FormLabel/component";
import FormInput from "../../FormInput/component";
import FormRadioCheck from "../../FormRadioCheck/component";

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
                <div className="text-input">
                  <FormLabel htmlFor="firstname" classNames="block bold mb-2">
                    Firstname
                  </FormLabel>
                  <FormInput
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={values.firstname}
                    handleChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="text-input">
                  <FormLabel htmlFor="lastname" classNames="block bold mb-2">
                    Lastname
                  </FormLabel>
                  <FormInput
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={values.lastname}
                    handleChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="text-input">
                  <FormLabel htmlFor="emailAddress" classNames="block bold mb-2">
                    Email address
                  </FormLabel>
                  <FormInput
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    value={values.emailAddress}
                    handleChange={handleChange}
                  />
                </div>
              </div>

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

              <div className="mb-5">
                <div className="text-input">
                  <FormLabel htmlFor="password" classNames="block bold mb-2">
                    Password
                  </FormLabel>
                  <FormInput
                    type="password"
                    id="password"
                    name="password"
                    value={values.password}
                    handleChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="checkbox ml-0">
                  <FormRadioCheck
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={values.acceptTerms}
                    handleChange={handleChange}
                  />
                  <FormLabel htmlFor="acceptTerms" classNames="ml-2 lh-2 semi-bold pointer">
                    I accept the <a href="javascript:void(0)">Terms and Conditions</a>
                  </FormLabel>
                </div>
              </div>
            </fieldset>
          </form>
        )}
      </FormContainer>
    );
  }
}

export default SignUpForm;
