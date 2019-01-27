require("@tensorflow/tfjs-node");
const tf = require("@tensorflow/tfjs");
const loadCSV = require("./load-csv");

let { features, labels, testFeatures, testLabels } = loadCSV(
  "kc_house_data.csv",
  {
    shuffle: true,
    splitTest: 10,
    dataColumns: ["lat", "long", "sqft_lot", "sqft_living"],
    labelColumns: ["price"]
  }
);

console.log("features", features);
console.log("labels", labels);
console.log("testFeatures", testFeatures);
console.log("testLabels", testLabels);
