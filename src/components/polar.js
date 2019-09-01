import React from 'react';
import {Polar} from 'react-chartjs-2';

const data = {
  datasets: [{
    data: [
      11,
      16,
      7,
      3,
      14
    ],
    backgroundColor: [
      '#FF6384',
      'green',
      '#FFCE56',
      'purple',
      '#36A2EB'
    ],
    label: 'My dataset' // for legend
  }],
  labels: [
    'Strawberries',
    'Apples',
    'Bananas',
    'Grapes',
    'Oranges'
  ]
};

export default () => (
    <div>
      <Polar data={data} />
    </div>
  )