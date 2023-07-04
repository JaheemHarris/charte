import { Directive, ElementRef, HostListener, Inject, Input, OnInit } from '@angular/core';
import { MatTooltip, MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';

@Directive({
  selector: '[appTestTooltip]'
})
export class TestTooltipDirective {

  @Input('appTestTooltip')
  tooltipText!: string;

  constructor(
    private tooltip: MatTooltip,
    private elementRef: ElementRef,
    @Inject(MAT_TOOLTIP_DEFAULT_OPTIONS) private defaultOptions: any
  ) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.tooltip.show();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.tooltip.hide();
  }

  ngOnInit(): void {
    this.tooltip.message = this.tooltipText;
    // this.tooltip.showDelay = 1;
    // this.tooltip.hideDelay = 300;
    this.tooltip.position = 'right';

    // this.elementRef.nativeElement.addEventListener('mouseenter', () => {
    //   this.tooltip.show();
    // });

    // this.elementRef.nativeElement.addEventListener('mouseleave', () => {
    //   this.tooltip.hide();
    // });
  }
}