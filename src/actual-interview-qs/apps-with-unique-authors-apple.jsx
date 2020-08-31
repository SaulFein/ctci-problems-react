import React from "react";

class UniqueIdApps extends React.Component {
  constructor() {
    super();
    this.apps = {};
  }

  uniqueIdApp(apps) {}

  render() {
    return <div>{this.uniqueIdApp(["a", "b", "a"])}</div>;
  }
}

export default UniqueIdApps;
