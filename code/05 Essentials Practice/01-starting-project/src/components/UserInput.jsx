import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    inInv: 10000,
    annInv: 1200,
    exRet: 6,
    dur: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((preUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.inInv}
            onChange={(event) => handleChange(inInv, event.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" />
        </p>
      </div>
      <div className="input-group">
        <label>Expected Return</label>
        <input type="number" />
        <label>Duration</label>
        <input type="number" />
      </div>
    </section>
  );
}
