const tf = require("@tensorflow/tfjs");
const _ = require("lodash");

class LinearRegression {
  constructor(features, labels, options) {
    this.features = features;
    this.labels = labels;
    this.options = Object.assign(
      { learningRate: 0.1, iterations: 1000 },
      options
    );
  }

  gradientDescent() {}

  train() {
    for (let i = 0; i < this.options.iterations; i++) {
      this.gradientDescent(featureSlice, labelSlice);
    }
  }
}

module.exports = LinearRegression;
