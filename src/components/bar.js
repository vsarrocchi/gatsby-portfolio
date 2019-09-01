import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
	labels: [
		'Strawberries',
		'Apples',
		'Bananas',
		'Grapes',
		'Oranges'
	],
	datasets: [{
		data: [300, 50, 100, 30, 170],
		backgroundColor: [
			'#FF6384',
			'green',
			'#FFCE56',
			'purple',
			'#36A2EB'
		],
		hoverBackgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56',
			'#FF6384',
			'#36A2EB',
		]
	}]
};

export default () => (
    <div>
      <Bar data={data} />
    </div>
  )