import {Component, NgZone, OnInit} from '@angular/core';
import * as Plotly from 'plotly.js';

@Component({
  selector: 'app-zonejs',
  templateUrl: './zonejs.component.html',
  styleUrls: ['./zonejs.component.scss']
})
export class ZonejsComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {
    this.createGraph()
  }

  createGraph() {
    const rand = () => Math.random();
    var x = [1, 2, 3, 4, 5];
    const new_data = (trace: any) => Object.assign(trace, {y: x.map(rand)});

    // add random data to three line traces
    var data = [
      {mode: 'lines', line: {color: "#b55400"}},
      {mode: 'lines', line: {color: "#393e46"}},
      {mode: 'lines', line: {color: "#222831"}}
    ].map(new_data);
    var layout = {
      title: 'User Zoom Persists<br>When uirevision Unchanged',
      uirevision: 'true',
      xaxis: {autorange: true},
      yaxis: {autorange: true}
    };

    Plotly.react('plotly', data, layout);
  }
}
