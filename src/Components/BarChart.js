// BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js'
Chart.register(CategoryScale, LinearScale, BarElement)

const BarChart = () => {
    const data = {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
            {
                label: 'Bar Chart',
                data: [12, 19, 3],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            <h1>Bar Chart</h1>
            <Bar data={data} />
        </>
    );
};

export default BarChart;
