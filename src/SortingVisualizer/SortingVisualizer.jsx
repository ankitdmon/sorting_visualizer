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
    for (let i = 0; i < 310; i++) {
      array.push(randomIntFromInterval(5, 650));
    }
    this.setState({ array });
  }

  mergeSort() {}

  quickSort() {}

  heapSort() {}

  bubbleSort() {}

  render() {
    const { array } = this.state;
    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              height: `${value}px`,
            }}
          ></div>
        ))}
        <div>
          <button onClick={()=>this.resetArray()}>Generate New Array </button>
          <button onClick={()=>this.mergeSort()}>Merge Sort</button>
          <button onClick={()=>this.quickSort()}>Quick Sort</button>
          <button onClick={()=>this.heapSort()}>Heap Sort</button>
          <button onClick={()=>this.bubbleSort()}>Bubble Sort</button>
        </div>
      </div>
    );
  }
}

// lol using this link https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function randomIntFromInterval(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
