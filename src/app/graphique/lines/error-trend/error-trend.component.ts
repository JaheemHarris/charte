import { AfterViewInit, Component, Input } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

@Component({
  selector: 'app-error-trend',
  templateUrl: './error-trend.component.html',
  styleUrls: ['./error-trend.component.css']
})
export class ErrorTrendComponent implements AfterViewInit {
  constructor() {}

  @Input()
  chartId!: string;

  @Input()
  chartData : any[] = [];

  ngAfterViewInit(): void {
    const root = am5.Root.new(this.chartId);

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    // root.dateFormatter.setAll({
    //   dateFormat: 'yyyy',
    //   dateFields: ['valueX']
    // });

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelY: 'zoomY',
        pinchZoomX: true
      })
    );

    

    const easing = am5.ease.linear;

    const xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 50
    });

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "country",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {})
      })
    );

    xRenderer.grid.template.setAll({
      location: 1
    })

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        extraMax: 0.1,
        extraMin: 0.1,
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1
        }),
        tooltip: am5.Tooltip.new(root, {})
      })
    );

    this.chartData.forEach(lineData => {
      const series = chart.series.push(
        am5xy.LineSeries.new(root, {
          calculateAggregates: true,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "visits",
          categoryXField: "country",
          tooltip: am5.Tooltip.new(root, {
            labelText: "value: {valueY}\nerror: {error}"
          })
        })
      );

      // series.data.processor = am5.DataProcessor.new(root, {
      //   dateFormat: 'yyyy-MM-dd',
      //   dateFields: ['date']
      // });

      const colors = chart.get("colors");
      colors?.set("step", 2);

      series.bullets.push(function() {
        const graphics = am5.Graphics.new(root, {
          strokeWidth: 2,
          stroke: series.get("stroke"),
          draw: function(display, target) {
            const dataItem = target.dataItem;
      
            const dataContext = dataItem?.dataContext;
            const error = 100;
      
            const yPosition0 = yAxis.valueToPosition(0);
            const yPosition1 = yAxis.valueToPosition(error);
      
            const height =
              (yAxis.get("renderer").positionToCoordinate(yPosition1) - yAxis.get("renderer").positionToCoordinate(yPosition0)) / 2;
      
            display.moveTo(0, -height);
            display.lineTo(0, height);
      
            display.moveTo(-10, -height);
            display.lineTo(10, -height);
      
            display.moveTo(-10, height);
            display.lineTo(10, height);
          }
        });
      
        return am5.Bullet.new(root, {
          dynamic: true,
          sprite: graphics
        });
      });

      series.bullets.push(function() {
        var graphics = am5.Circle.new(root, {
          strokeWidth: 2,
          radius: 5,
          stroke: series.get("stroke"),
          fill: root.interfaceColors.get("background")
        });
        return am5.Bullet.new(root, {
          sprite: graphics
        });
      });

      const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        snapToSeries: [series]
      }));

      cursor.lineY.set("visible", false);

      chart.set("scrollbarX", am5.Scrollbar.new(root, {
        orientation: "horizontal"
      }));
      
      series.data.setAll(this.chartData);
      xAxis.data.setAll(this.chartData);

      series.appear(1000);
      chart.appear(1000, 100);

    });
  }
}
