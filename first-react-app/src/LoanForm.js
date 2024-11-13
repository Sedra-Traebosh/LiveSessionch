import "./FormStyles.css";
import Model from "./Model";
import { useState } from "react";

export default function LoanForm() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [loanInputs, setloanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: "",
    salaryRange: "",
  });
  const [showModal, setShowModal] = useState(false);

  function handleFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);
    const { age, phoneNumber } = loanInputs;
    if (age < 18 || age > 100) {
      setErrorMessage("the age is not allowed");
    } else if (phoneNumber.length < 10 || phoneNumber > 12) {
      setErrorMessage("phone number format is incorrect");
    }

    setShowModal(true);
  }

  const btnIsDisabled =
    loanInputs.name == "" ||
    loanInputs.age == "" ||
    loanInputs.phoneNumber == "";

  let btnClass = "";
  if (btnIsDisabled) {
    btnClass = "disabled";
  } else {
    btnClass = "";
  }
  // className={btnIsDisabled ? "disabled" : ""}  اختصار للشرط

  function handleDivClick() {
    if (showModal) {
      setShowModal(false);
    }
  }
  return (
    <div
      onClick={handleDivClick}
      className="flex"
      style={{ flexDirection: "column" }}
    >
      <form id="loan-form" className="flex" style={{ flexDirection: "column" }}>
        <h1>Requesting a Loan</h1>
        <hr></hr>
        <label>Name:</label>
        <input
          value={loanInputs.name}
          onChange={(event) => {
            setloanInputs({ ...loanInputs, name: event.target.value });
          }}
        />
        <label>Phone Number:</label>
        <input
          value={loanInputs.phoneNumber}
          onChange={(event) => {
            setloanInputs({ ...loanInputs, phoneNumber: event.target.value });
          }}
        ></input>
        <label>Age:</label>
        <input
          value={loanInputs.age}
          onChange={(event) => {
            setloanInputs({ ...loanInputs, age: event.target.value });
          }}
        />

        <label style={{ marginTop: "30px" }}>Are you an employee?</label>
        <input
          type="checkbox"
          checked={loanInputs.isEmployee}
          onChange={(event) => {
            setloanInputs({ ...loanInputs, isEmployee: event.target.checked });
          }}
        />
        <label>Salary:</label>
        <select
          value={loanInputs.salaryRange}
          onChange={(event) => {
            setloanInputs({ ...loanInputs, salaryRange: event.target.value });
          }}
        >
          <option> less than 500$</option>
          <option> between 500$ and 2000</option>
          <option> above 2000</option>
        </select>
        <button
          className={btnClass}
          onClick={handleFormSubmit}
          disabled={btnIsDisabled}
          id="submit-loan-btn"
        >
          Submit
        </button>
      </form>

      <Model errorMessage={errorMessage} isVisible={showModal} />
    </div>
  );
}
