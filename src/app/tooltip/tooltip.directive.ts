import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {
  @Input('tooltipTextContent')
  tooltipTextContent!: string;
  @Input('tooltipHtmlContent')
  tooltipHtmlContent!: string;
  @Input('tooltipBgColor')
  tooltipBgColor!: string;
  @Input('tooltipTextColor')
  tooltipTextColor!: string;

  tooltipElement!: HTMLElement;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  showTooltip() {
    this.tooltipElement = this.renderer.createElement('div');
    this.tooltipElement.className = 'cca-tooltip right';
    this.setTooltipContent();

    if (this.tooltipBgColor) {
      this.renderer.setStyle(this.tooltipElement, 'background-color', this.tooltipBgColor);
    }

    if (this.tooltipTextColor) {
      this.renderer.setStyle(this.tooltipElement, 'color', this.tooltipTextColor);
    }

    const hostElement = this.elementRef.nativeElement;
    this.renderer.appendChild(hostElement, this.tooltipElement);
  }

  hideTooltip() {
    if (this.tooltipElement && this.tooltipElement.parentNode) {
      this.tooltipElement.parentNode.removeChild(this.tooltipElement);
    }
  }

  private setTooltipContent() {
    if (this.tooltipHtmlContent) {
      this.tooltipElement.innerHTML = this.tooltipHtmlContent;
    } else if (this.tooltipTextContent) {
      this.tooltipElement.textContent = this.tooltipTextContent;
    }
  }
}
