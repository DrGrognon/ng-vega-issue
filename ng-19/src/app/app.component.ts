import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ChartComponent } from "./chart/chart.component";
import { EmbededReactChartComponent } from "./embeded-react-chart/embeded-react-chart.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, ChartComponent, EmbededReactChartComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "ng-19";
}
