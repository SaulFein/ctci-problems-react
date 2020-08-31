import React from "react";

// import './directory.styles.scss';

class IsUnique extends React.Component {
  constructor() {
    super();
    this.result = false;
  }

  isUnique(arr) {
    const hashMap = {};
    for (let i = 0; i < arr.length; i++) {
      if (hashMap[arr[i]]) return false;
      hashMap[arr[i]] = true;
    }
    return true;
  }

  render() {
    return (
      <div>{this.isUnique(["a", "b", "a"]) === true ? "true" : "false"}</div>
    );
  }
}

export default IsUnique;
