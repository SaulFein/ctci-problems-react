import React from "react";

class UniqueIdApps extends React.Component {
  constructor() {
    super();
    this.apps = [
      { title: "Dumb App 1", authors: ["Jim Bob", "Carl Smith"] },
      { title: "Dumb App 2", authors: ["Karen Smith", "Jim Bob"] },
      { title: "Dumb App 3", authors: ["Kevin Smith", "Matt Goode"] },
      { title: "Dumb App 4", authors: ["Karen Smith", "Bob Hope"] },
      { title: "Dumb App 5", authors: ["Ralf Sutton", "Big Jay"] },
    ];
  }

  uniqueIdApp(apps) {
    const hashMap = {};
    let idxsToRemove = [];
    for (let i = 0; i < apps.length; i++) {
      for (let j = 0; j < apps[i].authors.length; j++) {
        if (hashMap[apps[i].authors[j]] >= 0) {
          idxsToRemove.push(hashMap[apps[i].authors[j]]);
          idxsToRemove.push(i);
        } else {
          hashMap[apps[i].authors[j]] = i;
        }
      }
    }
    let idxs = [...new Set(idxsToRemove)];
    for (var i = idxs.length - 1; i >= 0; i--) {
      apps.splice(idxs[i], 1);
    }
    return JSON.stringify(apps);
  }

  render() {
    return <div>{this.uniqueIdApp(this.apps)}</div>;
  }
}

export default UniqueIdApps;
