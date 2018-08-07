import * as React from "react";
import "./App.css";

/* To get absolute paths: https://github.com/wmonk/create-react-app-typescript/issues/122 */
import { BizBar, Map } from "./components";

/* const data = {
  labels: [
    "01/27 - 01/31",
    "02/01 - 02/28",
    "03/01 - 03/31",
    "04/01 - 04/30",
    "05/01 - 05/31",
    "06/01 - 06/30",
    "07/01 - 07/27"
  ],
  series: [
    {
      className: "brand-bar",
      data: [
        { value: 6, meta: "01/27 - 01/31" },
        { value: 28, meta: "02/01 - 02/28" },
        { value: 19, meta: "03/01 - 03/31" },
        { value: 53, meta: "04/01 - 04/30" },
        { value: 33, meta: "05/01 - 05/31" },
        { value: 31, meta: "06/01 - 06/30" },
        { value: 24, meta: "07/01 - 07/27" }
      ],
      name: "Bookings"
    },
    {
      className: "dark-bar",
      data: [
        { value: 6, meta: "01/27 - 01/31" },
        { value: 44, meta: "02/01 - 02/28" },
        { value: 23, meta: "03/01 - 03/31" },
        { value: 67, meta: "04/01 - 04/30" },
        { value: 78, meta: "05/01 - 05/31" },
        { value: 38, meta: "06/01 - 06/30" },
        { value: 24, meta: "07/01 - 07/27" }
      ],
      name: "Nights"
    }
  ]
}; */

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <BizBar />
        <Map name="yo gril" />
      </div>
    );
  }
}

export default App;
