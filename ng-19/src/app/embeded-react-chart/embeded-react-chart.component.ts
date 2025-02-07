import {
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ReactChart } from "react-vega-lib";

@Component({
  selector: "app-embeded-react-chart",
  imports: [],
  templateUrl: "./embeded-react-chart.component.html",
  styleUrl: "./embeded-react-chart.component.css",
})
export class EmbededReactChartComponent implements OnInit, OnChanges {
  reactContainer!: ReactDOM.Root;

  constructor(private el: ElementRef) {
    console.log(this.el.nativeElement); // Logs the root component element
    this.reactContainer = ReactDOM.createRoot(
      this.el.nativeElement as HTMLElement,
    );
  }

  ngOnInit(): void {
    this.renderReactComponent();
  }

  ngOnChanges(changes: SimpleChanges): void {}

  renderReactComponent(): void {
    let reactComponentElement = React.createElement(ReactChart, {});

    this.reactContainer.render(reactComponentElement);
  }
}
