import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'shared-file-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <button (click)="fileInput.click()">Upload</button>
      <input style="display: none;" #fileInput type="file"/>
    </div>
  `,
})
export class FileInputComponent {}
