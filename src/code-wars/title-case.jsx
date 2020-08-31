import React from "react";

// import './directory.styles.scss';

class TitleCase extends React.Component {
  constructor() {
    super();
    this.result = false;
  }

  titleCase(title, minorWords) {
    let words = title.toLowerCase().split(" "); //['a', 'clash', 'of', 'KINGS'];
    let othersWords = minorWords ? minorWords.toLowerCase().split(" ") : null;

    for (let i = 0; i < words.length; i++) {
      if (i == 0) {
        words[i] = words[i].toLowerCase();
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      } else if (othersWords) {
        if (i > 0 && !othersWords.includes(words[i])) {
          words[i] = words[i].toLowerCase();
          words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        } else {
          words[i] = words[i].toLowerCase();
        }
      } else {
        words[i] = words[i].toLowerCase();
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
    }
    return words.join(" ");
  }
  render() {
    return <div>{this.titleCase("THE WIND IN THE WILLOWS", "The In")}</div>;
  }
}

export default TitleCase;
