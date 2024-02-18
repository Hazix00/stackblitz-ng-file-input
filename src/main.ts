import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { FileInputComponent } from './file-upload.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FileInputComponent],
  template: `
    <shared-file-input></shared-file-input>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
