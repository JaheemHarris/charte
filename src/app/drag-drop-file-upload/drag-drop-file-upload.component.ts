import { Component, Input } from '@angular/core';

interface UploadedFile {
  file: File;
  progress: number;
}

@Component({
  selector: 'app-drag-drop-file-upload',
  templateUrl: './drag-drop-file-upload.component.html',
  styleUrls: ['./drag-drop-file-upload.component.css']
})
export class DragDropFileUploadComponent {
  
  @Input() position: 'horizontal' | 'vertical' = 'horizontal';

  uploadedFiles: UploadedFile[] = [];

  onDragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
    event.target.classList.add('drag-over');
  }

  onDragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();
    event.target.classList.remove('drag-over');
  }

  onDrop(event: any) {
    event.preventDefault();
    event.stopPropagation();
    event.target.classList.remove('drag-over');

    const files = event.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      this.uploadedFiles.push({ file: files[i], progress: 0 });
    }
  }

  onFileSelected(event: any) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.uploadedFiles.push({ file: files[i], progress: 0 });
    }
  }

  getFileTypeIcon(fileName: string): string {
    const extension = fileName.split('.').pop();
    // Return the appropriate file type icon based on the extension
    // For example, you can use a switch statement or a mapping object to map extensions to corresponding icons
    // You can use font icons or SVG icons, or even image URLs for each file type
    // Example: return 'assets/icons/' + extension + '.svg';
    return '';
  }

  getUploadProgressText(uFile: UploadedFile): string {
    const progress = uFile.progress;
    if (progress === 100) {
      return 'Completed';
    } else {
      return `${progress}% Done`;
    }
  }

  getFileSize(sizeInBytes: number): string {
    const sizeInMB = sizeInBytes / (1024 * 1024);
    return sizeInMB.toFixed(2) + ' MB';
  }

  removeFile(file: UploadedFile) {
    const index = this.uploadedFiles.indexOf(file);
    if (index !== -1) {
      this.uploadedFiles.splice(index, 1);
    }
  }

  getUploadProgress(file: UploadedFile): number {
    return file.progress;
  }
}
