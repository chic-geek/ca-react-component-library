import React from "react";
import FormContainer from "../../FormContainer/component";
import FormLabel from "../../FormLabel/component";
import FormInput from "../../FormInput/component";
import FormTextarea from "../../FormTextarea/component";
import FormRadioCheck from "../../FormRadioCheck/component";
import FormSelect from "../../FormSelect/component";

const initialFormState = {
  firstname: "",
  address: "",
  fruits: [
    { id: 1, name: "fruits", value: "banana", isChecked: false },
    { id: 2, name: "fruits", value: "apple", isChecked: false },
    { id: 3, name: "fruits", value: "orange", isChecked: false },
    { id: 4, name: "fruits", value: "grape", isChecked: false },
    { id: 5, name: "fruits", value: "mango", isChecked: false },
  ],
  shipping: "",
  favcity: "",
  acceptTerms: "",
};

const favcityOptions = [
  { id: 1, value: "Amsterdam", label: "Amsterdam" },
  { id: 2, value: "Buenos Aires", label: "Buenos Aires" },
  { id: 3, value: "Delhi", label: "Delhi" },
  { id: 4, value: "London", label: "London" },
  { id: 5, value: "Los Angeles", label: "Los Angeles" },
  { id: 6, value: "Tokyo", label: "Tokyo" },
];

class SampleForm extends React.Component {
  render() {
    return (
      <FormContainer initialValues={initialFormState}>
        {({ values, handleChange, handleMultiCheck }) => (
          <form>
            <fieldset className="b-none p-0 m-0">
              <h2 className="h2">
                <legend>Enter your details</legend>
              </h2>

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
                  <FormLabel htmlFor="address" classNames="block bold mb-2">
                    Enter your address
                  </FormLabel>
                  <FormTextarea
                    id="address"
                    name="address"
                    value={values.address}
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

            <fieldset className="b-none p-0 m-0">
              <h2 className="h2">
                <legend>Select the fruits you like</legend>
              </h2>

              {values.fruits.map((fruit) => (
                <div className="mb-1">
                  <div className="checkbox ml-0" key={fruit.id}>
                    <FormRadioCheck
                      type="checkbox"
                      id={fruit.value}
                      name={fruit.name}
                      value={fruit.value}
                      checked={fruit.isChecked}
                      handleChange={(event) => handleMultiCheck(event, fruit.id)}
                    />
                    <FormLabel htmlFor={fruit.value} classNames="ml-2 lh-2 semi-bold pointer">
                      {fruit.value}
                    </FormLabel>
                  </div>
                </div>
              ))}
            </fieldset>

            <fieldset className="b-none p-0 m-0">
              <h2 className="h2">
                <legend>Choose a shipping method</legend>
              </h2>

              <div className="mb-6">
                <div className="radio">
                  <FormRadioCheck
                    type="radio"
                    id="overnight"
                    name="shipping"
                    value="overnight"
                    checked={values.shipping === "overnight"}
                    handleChange={handleChange}
                  />
                  <FormLabel htmlFor="overnight" classNames="ml-2 lh-2 semi-bold pointer">
                    Overnight
                  </FormLabel>
                </div>

                <div className="radio">
                  <FormRadioCheck
                    type="radio"
                    id="twoday"
                    name="shipping"
                    value="twoday"
                    checked={values.shipping === "twoday"}
                    handleChange={handleChange}
                  />
                  <FormLabel htmlFor="twoday" classNames="ml-2 lh-2 semi-bold pointer">
                    Two day
                  </FormLabel>
                </div>

                <div className="radio">
                  <FormRadioCheck
                    type="radio"
                    id="ground"
                    name="shipping"
                    value="ground"
                    checked={values.shipping === "ground"}
                    handleChange={handleChange}
                  />
                  <FormLabel htmlFor="ground" classNames="ml-2 lh-2 semi-bold pointer">
                    Ground
                  </FormLabel>
                </div>
              </div>

              <div className="mb-3">
                <FormLabel htmlFor="favcity" classNames="block bold mb-2">
                  Choose your favorite city?
                </FormLabel>
                <div className="select">
                  <FormSelect
                    id="favcity"
                    name="favcity"
                    value={values.favcity}
                    handleChange={handleChange}
                    options={favcityOptions}
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

export default SampleForm;
