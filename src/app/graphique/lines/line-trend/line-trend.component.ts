import { AfterViewInit, Component, Input } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

@Component({
  selector: 'app-line-trend',
  templateUrl: './line-trend.component.html',
  styleUrls: ['./line-trend.component.css']
})
export class LineTrendComponent implements AfterViewInit {
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

    root.dateFormatter.setAll({
      dateFormat: 'yyyy',
      dateFields: ['valueX']
    });

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        focusable: true,
        panX: true,
        panY: true,
        wheelX: 'panX',
        wheelY: 'zoomX',
        pinchZoomX: true
      })
    );

    const easing = am5.ease.linear;

    const xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        maxDeviation: 0.5,
        groupData: false,
        baseInterval: {
          timeUnit: 'day',
          count: 1
        },
        renderer: am5xy.AxisRendererX.new(root, {
          pan: 'zoom',
          minGridDistance: 50
        }),
        tooltip: am5.Tooltip.new(root, {})
      })
    );

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 1,
        renderer: am5xy.AxisRendererY.new(root, { pan: 'zoom' })
      })
    );

    this.chartData.forEach(lineData => {
      const series = chart.series.push(
        am5xy.LineSeries.new(root, {
          minBulletDistance: 10,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: 'value',
          valueXField: 'date',
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: 'horizontal',
            labelText: '{valueY}'
          })
        })
      );

      series.data.processor = am5.DataProcessor.new(root, {
        dateFormat: 'yyyy-MM-dd',
        dateFields: ['date']
      });

      series.data.setAll(lineData);

      series.bullets.push(function() {
        const circle = am5.Circle.new(root, {
          radius: 4,
          fill: series.get('fill'),
          stroke: root.interfaceColors.get('background'),
          strokeWidth: 2
        });

        return am5.Bullet.new(root, {
          sprite: circle
        });
      });

      series.appear(1000, 100);
    });

    const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      xAxis: xAxis
    }));

    cursor.lineY.set("visible", false);

    chart.set("scrollbarX", am5.Scrollbar.new(root, {
      orientation: "horizontal"
    }));
    chart.appear(1000, 100);
  }
}
