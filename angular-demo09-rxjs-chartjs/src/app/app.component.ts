import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, ChartColor } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  barChartLabels: Label[] = ['January', 'February'];
  barChartData: ChartDataSets[] = [
    { stack: '0', data: [100, 200], label: 'Shoes Sale' },
    { stack: '0', data: [1000, 1500], label: 'Shoes Revenue' },
    { stack: '1', data: [200, 300], label: 'Cloths Sale' },
    { stack: '1', data: [2000, 900], label: 'Cloths Revenue' }
  ];
  barChartType: ChartType = 'bar';
  barChartOptions: ChartOptions = {
    responsive: true,
    // title: {
    //   display: true,
    //   text: 'Stacked Bar Chart'
    // },
    // tooltips: {
    //   mode: 'index',
    //   intersect: false
    // },
    scales: {
      xAxes: [{
        stacked: true,
      }],
      yAxes: [{
        stacked: true
      }]
    }
  };
  // barChartColor: ChartColor[] = ['yellow', 'orange', 'green'];
  barChartLegend = true;
  barChartPlugins = [];


  constructor() { }


}



