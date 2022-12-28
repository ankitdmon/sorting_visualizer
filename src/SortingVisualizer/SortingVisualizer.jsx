import React from 'react';
import './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  // For gererating new array again
  componentWillUnmount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push(randomIntFromInterval(5, 1000));
    }
    this.setState({ array });
  }

  render() {
    const { array } = this.state;
    return (
      <>
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
          >
            {value}
          </div>
        ))}
      </>
    );
  }
}

// lol using this link https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function randomIntFromInterval(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}
