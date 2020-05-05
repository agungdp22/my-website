import React, {PureComponent} from "react";
import  { Pie, Radar } from 'react-chartjs-2';

var options = {
    scale: {
        ticks: {
            beginAtZero: true,
            max: 100
        }
    }
};

const radar = {
    labels: ['Golang', 'Python', 'Javascript', 'C++', 'Arduino', 'Java', 'Shell'],
    datasets: [
      {
        label: 'Programming Language Skill',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [90, 85, 85, 80, 80, 80, 75],
      },
    ],
};

const pie = {
    labels: [
        'Golang',
        'C++',
        'Javascript',
        'Python',
        'Arduino',
        'Rust'
    ],
    datasets: [
      {
        data: [500, 300, 250, 200, 150, 100],
        backgroundColor: [
            '#00ADD8',
            '#F34B7D',
            '#F1E05A',
            '#3572A5',
            '#EDEDED',
            '#DEA584'
        ],
        hoverBackgroundColor: [
            '#00ADD8',
            '#F34B7D',
            '#F1E05A',
            '#3572A5',
            '#EDEDED',
            '#DEA584'
        ],
      }],
  };

export default class Resume extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-6">
                            <Pie data={pie} />
                        </div>
                        <div className="col-md-6">
                            <Radar data={radar} options={options} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}