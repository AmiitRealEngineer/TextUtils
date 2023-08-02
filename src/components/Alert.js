import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    // Initially, we have set the alert state to null. So, when the page loads, the alert will not be shown. But when we click on the toggle button, the showAlert function will be called and the alert state will be set to the object that we have passed in the showAlert function. So, the alert will be shown.
    props.alert && (
      <div
        class={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
      </div>
    )
  );
}
