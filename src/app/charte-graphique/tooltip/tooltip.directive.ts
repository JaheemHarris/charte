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
  @Input('tooltipPosition') tooltipPosition: 'left' | 'right' | 'above' | 'below' = 'left';

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
    this.tooltipElement.className = 'tooltip';
    this.setTooltipContent();
    this.setTooltipPosition();

    if (this.tooltipBgColor) {
      this.renderer.setStyle(this.tooltipElement, 'background-color', this.tooltipBgColor);
    }

    if (this.tooltipTextColor) {
      this.renderer.setStyle(this.tooltipElement, 'color', this.tooltipTextColor);
    }

    const hostElement = this.elementRef.nativeElement;
    this.renderer.appendChild(hostElement.parentNode, this.tooltipElement);
  }

  hideTooltip() {
    if (this.tooltipElement && this.tooltipElement.parentNode) {
      this.renderer.removeChild(this.tooltipElement.parentNode, this.tooltipElement);
    }
  }

  private setTooltipContent() {
    if (this.tooltipHtmlContent) {
      this.tooltipElement.innerHTML = this.tooltipHtmlContent;
    } else if (this.tooltipTextContent) {
      this.tooltipElement.textContent = this.tooltipTextContent;
    }
  }

  private setTooltipPosition() {
    const hostElement = this.elementRef.nativeElement;
    const hostRect = hostElement.getBoundingClientRect();
    const tooltipRect = this.tooltipElement.getBoundingClientRect();

    const tooltipPosition = this.tooltipPosition;
    const tooltipWidth = tooltipRect.width;
    const tooltipHeight = tooltipRect.height;

    let left: number;
    let top: number;

    switch (tooltipPosition) {
      case 'left':
        left = hostRect.left - tooltipWidth - 10; // 10 est une marge
        top = hostRect.top + (hostRect.height - tooltipHeight) / 2;
        break;
      case 'right':
        left = hostRect.right + 10; // 10 est une marge
        top = hostRect.top + (hostRect.height - tooltipHeight) / 2;
        break;
      case 'above':
        left = hostRect.left + (hostRect.width - tooltipWidth) / 2;
        top = hostRect.top - tooltipHeight - 10; // 10 est une marge
        break;
      case 'below':
        left = hostRect.left + (hostRect.width - tooltipWidth) / 2 - 5; // Déplacer de 5 mm vers la gauche
        top = hostRect.top + hostRect.height + 10; // 10 est une marge
        break;
      default:
        left = hostRect.left + (hostRect.width - tooltipWidth) / 2;
        top = hostRect.top + hostRect.height + 10; // Position par défaut en bas du bouton
        break;
    }

    this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
    this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
  }
}
