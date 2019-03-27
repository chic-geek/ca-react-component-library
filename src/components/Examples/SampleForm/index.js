import React from "react";
import FormContainer from "../../FormContainer";
import TextInput from "../../TextInput";
import Checkbox from "../../Checkbox";
import Radio from "../../Radio";
import Select from "../../Select";

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
                  type="textarea"
                  id="address"
                  name="address"
                  value={values.address}
                  handleChange={handleChange}>
                  Enter your address
                </TextInput>
              </div>

              <div className="mb-3">
                <Checkbox
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={values.acceptTerms}
                  handleChange={handleChange}>
                  I accept the{" "}
                  <a className="a" href="javascript:void(0)">
                    Terms and Conditions
                  </a>
                </Checkbox>
              </div>
            </fieldset>

            <fieldset className="b-none p-0 m-0">
              <h2 className="h2">
                <legend>Select the fruits you like</legend>
              </h2>

              {values.fruits.map((fruit) => (
                <div className="mb-1" key={fruit.id}>
                  <Checkbox
                    id={fruit.value}
                    name={fruit.name}
                    value={fruit.value}
                    checked={fruit.isChecked}
                    handleChange={(event) => handleMultiCheck(event, fruit.id)}>
                    {fruit.value}
                  </Checkbox>
                </div>
              ))}
            </fieldset>

            <fieldset className="b-none p-0 m-0">
              <h2 className="h2">
                <legend>Choose a shipping method</legend>
              </h2>

              <div className="mb-6">
                <div className="inline mr-2">
                  <Radio
                    id="overnight"
                    name="shipping"
                    value="overnight"
                    checked={values.shipping === "overnight"}
                    handleChange={handleChange}>
                    Overnight
                  </Radio>
                </div>

                <div className="inline mr-2">
                  <Radio
                    id="twoday"
                    name="shipping"
                    value="twoday"
                    checked={values.shipping === "twoday"}
                    handleChange={handleChange}>
                    Two day
                  </Radio>
                </div>

                <div className="inline">
                  <Radio
                    id="ground"
                    name="shipping"
                    value="ground"
                    checked={values.shipping === "ground"}
                    handleChange={handleChange}>
                    Ground
                  </Radio>
                </div>
              </div>

              <div className="mb-3">
                <Select
                  id="favcity"
                  name="favcity"
                  value={values.favcity}
                  handleChange={handleChange}
                  options={favcityOptions}>
                  Choose your favourite city?
                </Select>
              </div>
            </fieldset>
          </form>
        )}
      </FormContainer>
    );
  }
}

export default SampleForm;
