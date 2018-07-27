import Chartist from 'chartist';
import 'chartist-plugin-legend';
import 'chartist-plugin-tooltips';
import * as React from 'react';
import ChartistGraph from 'react-chartist';

import './Chart.css';

export interface IDataPoint {
    meta: string;
    value: number;
}

export interface ISeries {
    className?: string;
    data: IDataPoint[];
    name: string;
}

export interface IProps {
    data: {
        labels: string[];
        series: ISeries[];
    };
    type?: string;
}

const options = {
    axisX: {
        showGrid: false
    },
    axisY: {
        onlyInteger: true,
        scaleMinSpace: 50
    },
    height: '100%',
    plugins: [
        Chartist.plugins.tooltip({
            anchorToPoint: true,
            class: 'chartist-tooltip'
        }),
        Chartist.plugins.legend({
            position: 'bottom'
        })
    ],
    seriesBarDistance: 26
};

function Chart({ data, type = 'Bar' }: IProps) {
    return (
        <div style={{ height: 400 }}>
            <div className="he-chart">
                <ChartistGraph data={data} options={options} type={type} />
            </div>
        </div>
    );
}

export default Chart;
