import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ccaTooltip]'
})
export class CcaTooltipDirective {
  private tooltip!: HTMLElement;
  private caller!: HTMLElement;

  @Input('tooltipContent')
  tooltipContent!: string;
  @Input('tooltipCustomClass')
  tooltipCustomClass!: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.createTooltip();
    this.positionTooltip();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.removeTooltip();
  }

  private createTooltip() {
    this.tooltip = this.renderer.createElement('div');
    console.log(this.caller);
    this.renderer.addClass(this.tooltip, 'cca-tooltip');
    if (this.tooltipCustomClass) {
      this.renderer.addClass(this.tooltip, this.tooltipCustomClass);
    }
    this.tooltip.innerHTML = this.tooltipContent;
    this.renderer.appendChild(document.body, this.tooltip);
  }

  private positionTooltip() {
    const callerRect = this.elementRef.nativeElement.getBoundingClientRect();
    const tooltipRect = this.tooltip.getBoundingClientRect();
  
    const callerBottom = callerRect.top + callerRect.height;
    const tooltipHeight = tooltipRect.height;
    const windowWidth = window.innerWidth;
  
    let tooltipLeft = callerRect.right + 40; // Default position on the right
  
    if (callerRect.right + tooltipRect.width > windowWidth) {
      // Tooltip exceeds right end of the page, reposition on the left
      tooltipLeft = callerRect.left - tooltipRect.width - 40;
    }
  
    const tooltipTop = callerBottom - tooltipHeight;
  
    this.renderer.setStyle(this.tooltip, 'top', `${tooltipTop}px`);
    this.renderer.setStyle(this.tooltip, 'left', `${tooltipLeft}px`);
  }

  private removeTooltip() {
    if (this.tooltip && this.tooltip.parentNode) {
      this.tooltip.parentNode.removeChild(this.tooltip);
    }
  }
}
