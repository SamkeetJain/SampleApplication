import React, {useState, useEffect} from "react";
import {Chart as ChartJS, registerables} from "chart.js";
import {Line} from "react-chartjs-2";
import { faker } from '@faker-js/faker';


ChartJS.register(...registerables);

const options = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Simple Line Chart'
        },
    },
    interaction: {
        intersect: false,
    },
    scales: {
        x: {
            display: true,
            title: {
                display: true
            }
        },
        y: {
            display: true,
            title: {
                display: true,
                text: 'Value'
            },
        }
    }
}

const LineChart = props => {

    const [response, setResponse] = useState(props.response);
    const [data, setData] = useState({labels: [], datasets: []})

    const responseMapper = (res) => {
        const count = res.length > 0 ? Math.max(...res.map(d => d.data.length)) : 0;
        const labels = [...Array(count).keys()].map(x => String.fromCharCode(x + 97));
        const datasets = res.map(d => ({
                label: d.name, data: d.data,
                borderColor: faker.color.rgb(), fill: false,
                cubicInterpolationMode: 'monotone',
            })
        );
        return {labels: labels, datasets: datasets}
    }

    useEffect(() => {
            setResponse(props.response);
            setData(responseMapper(props.response));
        },
        [props.response]
    );

    return (
        <Line options={options} data={data}/>
    )
}

export default LineChart