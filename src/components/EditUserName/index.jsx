import React from "react";
import { useSelector } from "react-redux";

function EditUserName(props) {
  // We use the current state from the store to fill the placeholders
  const firstName = useSelector((state) => state.Actions.firstName);
  const lastName = useSelector((state) => state.Actions.lastName);

  return (
    // We use the props to set functions for onChange and onClick in another component
    <div className="header">
      <h1>Welcome back</h1>
      <div className="input-section">
        <input
          type="text"
          className="input"
          placeholder={firstName}
          onChange={props.changeFirstName}
        />
        <input
          type="text"
          className="input"
          placeholder={lastName}
          onChange={props.changeLastName}
        />
      </div>
      <div className="button-section">
        <button className="buttons" onClick={props.save}>
          Save
        </button>
        <button className="buttons" onClick={props.cancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditUserName;
