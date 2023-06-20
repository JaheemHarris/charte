import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';
import { ErrorMessageComponent } from './error-message.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {
  private snackbarRef: any; // Reference to the snackbar component

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  show(message: string, action?: string) {
    // Create a component factory for the CustomSnackbarComponent
    const factory = this.componentFactoryResolver.resolveComponentFactory(ErrorMessageComponent);

    // Create a component instance and set the input message
    const componentRef = factory.create(this.injector);
    componentRef.instance.message = message;
    if(action){
      componentRef.instance.action = action;
    }

    // Attach the component to the application
    this.appRef.attachView(componentRef.hostView);

    // Get the DOM element of the component
    const snackbarElement = (componentRef.hostView as any).rootNodes[0] as HTMLElement;

    // Append the snackbar element to the body
    document.body.appendChild(snackbarElement);

    // Store the component reference
    this.snackbarRef = componentRef;

    // Automatically remove the snackbar after a certain duration
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
