import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as CanvasJS from './canvasjs.min';
@Component({
  selector: 'app-sircle',
  templateUrl: './sircle.component.html',
  styleUrls: ['./sircle.component.sass']
})
export class SircleComponent implements OnInit {

  ngOnInit() {
    let chart = new CanvasJS.Chart("chartContainerF", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text: "Monthly Expense"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 450, name: "Food" },
          { y: 120, name: "Insurance" },
          { y: 300, name: "Traveling" },
          { y: 800, name: "Housing" },
          { y: 150, name: "Education" },
          { y: 150, name: "Shopping"},
          { y: 250, name: "Others" }
        ]
      }]
    });

    chart.render();
  }

}
