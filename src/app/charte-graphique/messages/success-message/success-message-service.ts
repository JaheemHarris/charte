import { Injectable, ApplicationRef, Injector, ComponentFactoryResolver } from '@angular/core';
import { SuccessMessageComponent } from './success-message.component';

@Injectable({
  providedIn: 'root'
})
export class SuccessMessageService {
  private snackbarRef: any; // Référence au composant de message de réussite

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  show(message: string, action?: string, position: 'top' | 'bottom' = 'bottom') {
    const factory = this.componentFactoryResolver.resolveComponentFactory(SuccessMessageComponent);
    const componentRef = factory.create(this.injector);
    componentRef.instance.message = message;
    componentRef.instance.position = position;

    if (action) {
      componentRef.instance.action = action;
    }
    this.appRef.attachView(componentRef.hostView);
    const snackbarElement = (componentRef.hostView as any).rootNodes[0] as HTMLElement;
    document.body.appendChild(snackbarElement);
    this.snackbarRef = componentRef;
    setTimeout(() => this.hide(), 5000);
  }

  hide() {
    if (this.snackbarRef) {
      this.appRef.detachView(this.snackbarRef.hostView);
      this.snackbarRef.destroy();
      this.snackbarRef = null;
    }
  }
}
