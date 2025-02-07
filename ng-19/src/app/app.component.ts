import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ChartComponent } from "./chart/chart.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, ChartComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "ng-19";
}
