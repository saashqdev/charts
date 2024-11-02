# Saashq Charts

### Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribute](https://saashq.org/charts/docs/contributing)

#### Installation
* Install via [`npm`](https://www.npmjs.com/get-npm):

  ```sh
  $ npm install saashq-charts
  ```

  and include in your project:
  ```js
  import { Chart } from "saashq-charts"
  ```

  ...or include following for es-modules(eg:vuejs):
  ```js
  import { Chart } from 'saashq-charts/dist/saashq-charts.esm.js'
  // import css
  import 'saashq-charts/dist/saashq-charts.min.css'
  ```

* ...or include within your HTML

  ```html
    <script src="https://cdn.jsdelivr.net/npm/saashq-charts@1.1.0/dist/saashq-charts.min.iife.js"></script>
    <!-- or -->
    <script src="https://unpkg.com/saashq-charts@1.1.0/dist/saashq-charts.min.iife.js"></script>
  ```

#### Usage
```js
const data = {
    labels: ["12am-3am", "3am-6pm", "6am-9am", "9am-12am",
        "12pm-3pm", "3pm-6pm", "6pm-9pm", "9am-12am"
    ],
    datasets: [
        {
            name: "Some Data", type: "bar",
            values: [25, 40, 30, 35, 8, 52, 17, -4]
        },
        {
            name: "Another Set", type: "line",
            values: [25, 50, -10, 15, 18, 32, 27, 14]
        }
    ]
}

const chart = new saashq.Chart("#chart", {  // or a DOM element,
                                            // new Chart() in case of ES6 module with above usage
    title: "My Awesome Chart",
    data: data,
    type: 'axis-mixed', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
    height: 250,
    colors: ['#7cd6fd', '#743ee2']
})
```

...or for es-modules (replace `new saashq.Chart()` with `new Chart()`):
```diff
- const chart = new saashq.Chart("#chart", {
+ const chart = new Chart("#chart", {  // or a DOM element,
                                    // new Chart() in case of ES6 module with above usage
    title: "My Awesome Chart",
    data: data,
    type: 'axis-mixed', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
    height: 250,
    colors: ['#7cd6fd', '#743ee2']
})
```


