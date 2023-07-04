import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropFileUploadComponent } from './drag-drop-file-upload.component';



@NgModule({
  declarations: [
    DragDropFileUploadComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DragDropFileUploadComponent
  ]
})
export class DragDropFileUploadModule { }
