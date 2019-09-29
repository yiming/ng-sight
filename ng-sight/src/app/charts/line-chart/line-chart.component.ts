import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.colors';
const LINE_CHART_DATA: any[] = [
  {data:[65,59,80,81,56,54,30], label: 'Sentiment Analysis'},
  {data:[25,39,60,91,36,54,50], label: 'Image Recognition'},
  {data:[65,60,91,39,36,50,54], label: 'Forecasting'}
];
const LINE_CHART_LABELS: string[] = ['Jan','Feb','Mar','Apr','May','Jun','Jul'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  constructor() { }
  public lineChartData: any[]=LINE_CHART_DATA;
  public lineChartLabels: string[]=LINE_CHART_LABELS;
  public lineChartType='line';
  public lineChartLegend=true;
  public lineChartOptions:any={
    responsive:true,
    scaleChowVerticalLines: false
  };
  ngOnInit() {
  }

}
