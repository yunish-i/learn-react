import { SetStateAction } from "react";
import { useState } from "react";

/**
 * When the Form is rendered, it appears to be frozen.
 * When a user enters stuff into the <input> tags or
 * clicks on the reset button nothing happens.
 * Identify and fix the error.
 */
export default function Form() {
  // let firstName = "";
  // let lastName = "";
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  function handleFirstNameChange(e: {
    target: { value: SetStateAction<string> };
  }) {
    setfirstName(e.target.value);
  }

  function handleLastNameChange(e: {
    target: { value: SetStateAction<string> };
  }) {
    setlastName(e.target.value);
  }

  function handleReset() {
    setfirstName("");
    setlastName("");
    // firstName = "";
    // lastName = "";
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>
        Hi, {firstName} {lastName}
      </h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
