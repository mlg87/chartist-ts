import DataSet from "@antv/data-set";
import { Axis, Chart as BizChart, Geom, Legend, Tooltip } from "bizcharts";
import * as React from "react";

/* tslint:disable:object-literal-sort-keys */
// const data = {
//   labels: [
//     "01/27 - 01/31",
//     "02/01 - 02/28",
//     "03/01 - 03/31",
//     "04/01 - 04/30",
//     "05/01 - 05/31",
//     "06/01 - 06/30",
//     "07/01 - 07/27"
//   ],
//   series: [
//     {
//       className: "brand-bar",
//       data: [
//         { value: 6, meta: "01/27 - 01/31" },
//         { value: 28, meta: "02/01 - 02/28" },
//         { value: 19, meta: "03/01 - 03/31" },
//         { value: 53, meta: "04/01 - 04/30" },
//         { value: 33, meta: "05/01 - 05/31" },
//         { value: 31, meta: "06/01 - 06/30" },
//         { value: 24, meta: "07/01 - 07/27" }
//       ],
//       name: "Bookings"
//     },
//     {
//       className: "dark-bar",
//       data: [
//         { value: 6, meta: "01/27 - 01/31" },
//         { value: 44, meta: "02/01 - 02/28" },
//         { value: 23, meta: "03/01 - 03/31" },
//         { value: 67, meta: "04/01 - 04/30" },
//         { value: 78, meta: "05/01 - 05/31" },
//         { value: 38, meta: "06/01 - 06/30" },
//         { value: 24, meta: "07/01 - 07/27" }
//       ],
//       name: "Nights"
//     }
//   ]
// };

const bookingData = [
  {
    name: "Bookings",
    "01/27 - 01/31": 6,
    "02/01 - 02/28": 28,
    "03/01 - 03/31": 19,
    "04/01 - 04/30": 53,
    "05/01 - 05/31": 33,
    "06/01 - 06/30": 31,
    "07/01 - 07/27": 24
  },
  {
    name: "Nights",
    "01/27 - 01/31": 6,
    "02/01 - 02/28": 44,
    "03/01 - 03/31": 23,
    "04/01 - 04/30": 67,
    "05/01 - 05/31": 78,
    "06/01 - 06/30": 38,
    "07/01 - 07/27": 24
  }
];
const ds = new DataSet();
const dv = ds.createView().source(bookingData);
dv.transform({
  type: "fold",
  fields: [
    "01/27 - 01/31",
    "02/01 - 02/28",
    "03/01 - 03/31",
    "04/01 - 04/30",
    "05/01 - 05/31",
    "06/01 - 06/30",
    "07/01 - 07/27"
  ],
  key: "timeperiod",
  value: "occurances"
});
/* tslint:enable:object-literal-sort-keys */

const colorBrand = "#4a86e5";
const colorBlue = "#3c4f72";

function Chart() {
  return (
    <BizChart height={800} data={dv} forceFit={true}>
      <Axis name="timeperiod" />
      <Axis
        name="occurances"
        // this is where we would style the label on the side to have a $ or not
      />
      <Legend />
      <Tooltip crosshairs={{ type: "y" }} />
      <Geom
        type="interval"
        position="timeperiod*occurances"
        color={["name", [colorBrand, colorBlue]]}
        adjust={[
          {
            marginRatio: 1 / 32,
            type: "dodge"
          }
        ]}
        // size={30} // adjust width of bar
        opacity={1}
      />
    </BizChart>
  );
}

export default Chart;
