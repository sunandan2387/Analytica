import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};


export const data = {
 
  datasets: [
    {
      label: 'A',
      data: ({ min: 20, max: 50 }),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'B',
      data: ({ min: 30, max: 40}),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    
  ],
};

export default function Barchart() {
  return <Bar options={options} data={data} />;
}
